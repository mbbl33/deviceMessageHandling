abstract class MessageFrameError extends Error {}

export class InvalidSubMessageOverheadError extends MessageFrameError {
  constructor(invalidPart: 'id' | 'lenght') {
    super(`subframe overhead is invalid no valid ${invalidPart} bythe`);
  }
}
export class UnknownSubMessageID extends MessageFrameError {
  constructor(id: number) {
    super(`ID ${id} is unknown or not configurated.`);
  }
}

export class NonErrorIDSetError extends MessageFrameError {
  constructor() {
    super(`In payload of a submessage with an error is no error id set`);
  }
}
