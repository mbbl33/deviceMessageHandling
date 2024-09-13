abstract class ParsingError extends Error {}

export class InvalidPayloadLenghtError extends ParsingError {
  constructor(expectedLength: number, recivedLenght: number) {
    super(
      `Payload length does not match data type. Excpected length:${expectedLength} byte, Recived length: ${recivedLenght}`
    );
  }
}
