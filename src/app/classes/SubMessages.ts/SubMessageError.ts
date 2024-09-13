export abstract class SubMessageError extends Error {
  public readonly side: 'intern' | 'extern';
  constructor(side: 'intern' | 'extern', message: string) {
    super(`${side} SubMessageError: ${message}`);
    this.side = side;
  }
}

export abstract class ExternSubMessageError extends SubMessageError {
  constructor(message: string) {
    super('extern', message);
  }
}

export abstract class InternSubMessageError extends SubMessageError {
  constructor(message: string) {
    super('intern', message);
  }
}

export class UnknownError extends ExternSubMessageError {
  constructor() {
    super('Unknown error on device side.');
  }
}
export class RequestedUnknownIDError extends ExternSubMessageError {
  constructor() {
    super('Request for unknown ID.');
  }
}

export class CouldntReadRequestedDataError extends ExternSubMessageError {
  constructor() {
    super("Device couldn't read requested data.");
  }
}

export class RequestedDataTemporaryNotAvaiableError extends ExternSubMessageError {
  constructor() {
    super('Requested data temporary not avaiable. Door is moving');
  }
}
export class DeviceStillReadingError extends ExternSubMessageError {
  constructor() {
    super('Requested data temporary not available, Device is still reading.');
  }
}

export class CouldntPerformRequestedActionError extends ExternSubMessageError {
  constructor() {
    super("Device couldn't perform requested action.");
  }
}

export class RequestedDataExceedsMaxSizeError extends ExternSubMessageError {
  constructor() {
    super('Requested data exceeds maximum allowed size.');
  }
}

export class UnknownErrorIDError extends InternSubMessageError {
  constructor() {
    super('Unknown error ID');
  }
}

export class ParsingError extends InternSubMessageError {
  constructor(error?: Error) {
    super('While parsing payload' + error?.message);
  }
}


