import {
  FixedSizedSubMessage,
  MessageSizeValidator,
  SubMessageDataTypes,
} from './SubMessageDataTypes';

export class Word_Message
  extends SubMessageDataTypes<number>
  implements SubMessageDataTypes<number>, FixedSizedSubMessage
{
  expectedByteSize: number = 2;
  messageSizeValidator: MessageSizeValidator = new MessageSizeValidator();
  readonly bitPerByte = 8;
  override parseFromBinary(binaryData: number[]): number {
    this.messageSizeValidator.validate(
      this.expectedByteSize,
      binaryData.length
    );
    let p1 = binaryData[0] << this.bitPerByte;
    let p2 = binaryData[1];
    const result = p1 | p2;
    return result;
  }
  override convertToBinary(binaryData: number): number[] {
    const out = [];
    const topBit = 0b1111_0000;
    const lowerBit = 0b0000_1111;

    let p1 = binaryData & topBit;
    p1 = p1 >> this.bitPerByte;
    let p2 = binaryData & lowerBit;
    out.push(p1);
    out.push(p2);

    return out;
  }
}
