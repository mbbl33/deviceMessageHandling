import {
  FixedSizedSubMessage,
  MessageSizeValidator,
  SubMessageDataTypes,
} from './SubMessageDataTypes';

export class Byte_Message
  extends SubMessageDataTypes<number>
  implements SubMessageDataTypes<number>, FixedSizedSubMessage
{
  readonly expectedByteSize: number = 1;
  readonly messageSizeValidator: MessageSizeValidator = new MessageSizeValidator();

  override parseFromBinary(binaryData: number[]): number {
    this.messageSizeValidator.validate(
      this.expectedByteSize,
      binaryData.length
    );
    return binaryData[0];
  }

  override convertToBinary(n: number): number[] {
    return [n];
  }
}
