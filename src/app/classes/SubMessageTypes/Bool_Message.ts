import {
  FixedSizedSubMessage,
  MessageSizeValidator,
  SubMessageDataTypes,
} from './SubMessageDataTypes';

export class Bool_Message
  extends SubMessageDataTypes<boolean>
  implements SubMessageDataTypes<boolean>, FixedSizedSubMessage
{
  expectedByteSize: number = 1;
  messageSizeValidator: MessageSizeValidator = new MessageSizeValidator();
  override parseFromBinary(binaryData: number[]): boolean {
    this.messageSizeValidator.validate(
      this.expectedByteSize,
      binaryData.length
    );
    return binaryData[0] !== 0;
  }
  override convertToBinary(boolean: boolean): number[] {
    return [boolean ? 1 : 0];
  }
}
