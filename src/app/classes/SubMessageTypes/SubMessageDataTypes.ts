import { InvalidPayloadLenghtError } from "./ParsingError";

export interface SubMessageDataTypes<T> {
  convertToBinary?(data: T): number[];
}

export abstract class SubMessageDataTypes<T> {
  
  abstract parseFromBinary(binaryData: number[]): T;
}

export interface FixedSizedSubMessage {
   readonly expectedByteSize: number; 
   readonly messageSizeValidator: MessageSizeValidator;
}

export class MessageSizeValidator {
  validate(expectedByteSize: number, recivedByteSize: number){
    if(expectedByteSize !== recivedByteSize){
      throw new InvalidPayloadLenghtError(expectedByteSize, recivedByteSize);
    }
  }
}