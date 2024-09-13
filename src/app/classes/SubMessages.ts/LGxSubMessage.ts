import { SubMessageDataTypes } from "../SubMessageTypes/SubMessageDataTypes";
import { SubMessage } from "./SubMessage";

export class LGxSubMessage<T> extends SubMessage<T> {
  id: number;
  messageType: SubMessageDataTypes<T>;

  constructor(id: number, messageType: SubMessageDataTypes<T>) {
    super();
    this.id = id;
    this.messageType = messageType;
  }
}
