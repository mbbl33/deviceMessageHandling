import { SubMessage } from '../SubMessages.ts/SubMessage';
import {
  InvalidSubMessageOverheadError,
  NonErrorIDSetError,
  UnknownSubMessageID,
} from './MessageFrameError';

export abstract class MessageFrame {
  abstract definedSubMessages: SubMessage<unknown>[];
  static readonly MAX_SUB_MESSAGE_LENGTH = 0xff;
  static readonly ERROR_ID_BYTE_SIZE = 0x1;

  subMessages: SubMessage<unknown>[] = [];

  // LENGTH ID PAYLOAD
  static parseFromBinary(this: new () => MessageFrame, bindata: number[]) {
    const workData = [...bindata]; // create copy -> keep old array untouched

    const t = new this();

    do {
      const lengthSubMessage = workData.splice(0, 1).pop();
      const idSubMessage = workData.splice(0, 1).pop();
      if (!lengthSubMessage) {
        // NO length In Message
        console.error(new InvalidSubMessageOverheadError('lenght').message);
        continue;
      }
      console.log('id', idSubMessage);
      if (!idSubMessage) {
        // NO ID IN MESSAGE
        console.error(new InvalidSubMessageOverheadError('id').message);
        continue;
      }
      const subClassMessage = t.getSubMessageById(idSubMessage);

      if (!subClassMessage) {
        // ID NOT KNOWN
        console.error(new UnknownSubMessageID(idSubMessage).message);
        continue;
      }

      if (lengthSubMessage === MessageFrame.MAX_SUB_MESSAGE_LENGTH) {
        // error in message
        const newT = MessageFrame.subMessageErrorHandling(
          workData,
          subClassMessage
        );
        if (!newT) continue;
        t.subMessages.push(newT);
      }

      const payload = workData.splice(0, lengthSubMessage - 1); // ERROR HANDLING
      const newT = subClassMessage.createNewInstanceFromBinayData(payload);

      t.subMessages.push(newT);
    } while (workData?.length);

    return t;
  }

  private static subMessageErrorHandling(
    workData: number[],
    subClassMessage: SubMessage<unknown>
  ) {
    const errorID = workData.splice(0, MessageFrame.ERROR_ID_BYTE_SIZE).pop();
    if (!errorID) {
      console.error(new NonErrorIDSetError().message);
      return;
    }
    return subClassMessage.setFromErrorID(errorID);
  }

  getSubMessageById(id: number) {
    return this.definedSubMessages.find((message) => message.id == id);
  }

  static createFromSubMessages(
    this: new () => MessageFrame,
    ...args: SubMessage<unknown>[]
  ) {
    const t = new this();
    t.subMessages.push(...args);
    return t;
  }

  convertToBinary() {
    return this.subMessages.map((sub) => sub.convertToBinary())?.flat();
  }
}
