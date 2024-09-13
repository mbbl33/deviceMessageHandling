import { SubMessageDataTypes } from './SubMessageDataTypes';

export class ASCII_Message
  extends SubMessageDataTypes<string>
  implements SubMessageDataTypes<string>
{
  parseFromBinary(binaryData: number[]) {
    let output: string[] = [];
    binaryData.forEach((element) => {
      output.push(String.fromCharCode(element));
    });
    return output.join('');
  }
  override convertToBinary(asciiData: String): number[] {
    const asciiKeys = [];
    for (var i = 0; i < asciiData.length; i++) {
      asciiKeys.push(asciiData[i].charCodeAt(0));
    }

    return asciiKeys;
  }
}
