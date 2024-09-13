import {
  FixedSizedSubMessage,
  MessageSizeValidator,
  SubMessageDataTypes,
} from './SubMessageDataTypes';

export abstract class FixedSized_BoolArray_Message
  extends SubMessageDataTypes<boolean[]>
  implements SubMessageDataTypes<boolean[]>, FixedSizedSubMessage
{
  abstract readonly expectedByteSize: number;
  readonly bitPerByte = 8;
  readonly messageSizeValidator: MessageSizeValidator =
    new MessageSizeValidator();
  override parseFromBinary(binaryData: number[]): boolean[] {
    this.messageSizeValidator.validate(
      this.expectedByteSize,
      binaryData.length
    );
    const uint8Array = new Uint8Array(binaryData);
    let out: boolean[] = [];
    uint8Array.forEach((value) => {
      for (let i = 0; i < this.bitPerByte; i++) {
        let shiftedValue = value >> i;
        out.push((shiftedValue & 1) === 1);
      }
    });
    return out;
  }

  override convertToBinary(booleans: boolean[]): number[] {
    if (booleans.length > this.expectedByteSize * this.bitPerByte) {
      throw new Error(
        `Input boolean array size must be ${
          this.expectedByteSize * this.bitPerByte
        } bits`
      );
    }
    //fill up to  bit size
    for (
      let i = booleans.length;
      i < this.expectedByteSize * this.bitPerByte;
      i++
    ) {
      booleans.push(false);
    }

    let out: number[] = [];
    for (let i = 0; i < booleans.length; i += this.bitPerByte) {
      let byte = 0;
      for (let bit = 0; bit < this.bitPerByte; bit++) {
        // build byte
        if (booleans[i + bit]) {
          byte |= 1 << bit;
        }
      }
      out.push(byte);
    }

    return out;
  }
}
