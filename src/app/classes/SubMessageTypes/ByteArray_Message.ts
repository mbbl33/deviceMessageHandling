import { SubMessageDataTypes } from './SubMessageDataTypes';

export class ByteArray_Message
  extends SubMessageDataTypes<number[]>
  implements SubMessageDataTypes<number[]>
{
  override parseFromBinary(binaryData: number[]): number[] {
    return binaryData;
  }
  override convertToBinary(binaryData: number[]): number[] {
    return binaryData;
  }
}
