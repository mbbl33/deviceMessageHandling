import { SubMessageDataTypes } from './SubMessageDataTypes';
import { Word_Message } from './Word_Message';

export class WordArray_Message
  extends SubMessageDataTypes<number[]>
  implements SubMessageDataTypes<number[]>
{
  readonly bitPerByte = 8;
  static readonly word_message = new Word_Message();
  override parseFromBinary(binaryData: number[]): number[] {
    const out = [];
    for (let i = 0; i < binaryData.length; i += 2) {
      let p1 = binaryData[i];
      let p2 = binaryData[i + 1];
      const result = WordArray_Message.word_message.parseFromBinary([p1, p2]);
      out.push(result);
    }
    return out;
  }
  override convertToBinary(numbers: number[]): number[] {
    const out = [];
    for (let i = 0; i < numbers.length; i++) {
      const result = WordArray_Message.word_message.convertToBinary(numbers[i]);
      out.push(result[0]);
      out.push(result[1]);
    }
    return out;
  }
}
