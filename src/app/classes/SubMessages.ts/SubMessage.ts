import { SubMessageDataTypes } from '../SubMessageTypes/SubMessageDataTypes';
import {
  CouldntPerformRequestedActionError,
  CouldntReadRequestedDataError,
  DeviceStillReadingError,
  ParsingError,
  RequestedDataExceedsMaxSizeError,
  RequestedDataTemporaryNotAvaiableError,
  RequestedUnknownIDError,
  SubMessageError,
  UnknownError,
  UnknownErrorIDError,
} from './SubMessageError';
class ErrorConvertToBinary extends Error {
  constructor(instance: SubMessageDataTypes<unknown>) {
    super(
      'could not convert: convertToBinary missing in ' +
        instance.constructor.name
    );
  }
}
export abstract class SubMessage<T> {
  abstract id: number;

  abstract messageType: SubMessageDataTypes<T>;

  private _data?: T; // single source of truth

  private _error?: SubMessageError;

  constructor(data?: T) {
    if (data) {
      this._data = data;
    }
  }

  get data(): T | undefined {
    return this._data;
  }

  set data(newValue: T) {
    this._data = newValue;
  }

  get error(): SubMessageError | undefined {
    return this._error;
  }

  set error(error: SubMessageError) {
    this._error = error;
  }

  get binaryData(): undefined | number[] {
    if (!this._data) {
      // no convert necessary
      return;
    }

    if (!this.messageType.convertToBinary) {
      // must convert, but no converter
      throw new ErrorConvertToBinary(this.messageType);
    }

    // convert if  this._data && this.messageType.convertToBinary
    return this.messageType.convertToBinary(this._data);
  }

  set binaryData(newValue: number[]) {
    this._data = this.messageType.parseFromBinary(newValue);
  }

  get binaryLength() {
    return 1 + (this.binaryData ? this.binaryData.length : 0);
  }

  static createFromData<T>(this: new () => SubMessage<unknown>, data: T) {
    const t = new this();
    t._data = data;
    return t;
  }

  static createFromBinary(this: new () => SubMessage<unknown>, data: number[]) {
    const t = new this();
    t.data = t.messageType.parseFromBinary(data);
    return t;
  }

  setFromErrorID<T extends object>(errorID: number) {
    const copy = new (this.constructor as { new (): T })();
    Object.assign(copy, this);
    const t = copy as SubMessage<unknown>;
    switch (errorID) {
      case 0:
        t.error = new UnknownError();
        break;
      case 1:
        t.error = new RequestedUnknownIDError();
        break;
      case 2:
        t.error = new CouldntReadRequestedDataError();
        break;
      case 3:
        t.error = new RequestedDataTemporaryNotAvaiableError();
        break;
      case 4:
        t.error = new DeviceStillReadingError();
        break;
      case 5:
        t.error = new CouldntPerformRequestedActionError();
        break;
      case 6:
        t.error = new RequestedDataExceedsMaxSizeError();
        break;
      default:
        t.error = new UnknownErrorIDError();
        break;
    }
    return t;
  }

  createNewInstanceFromBinayData<T extends object>(
    data: number[]
  ): SubMessage<unknown> {
    const copy = new (this.constructor as { new (): T })();

    Object.assign(copy, this);

    const t = copy as SubMessage<unknown>;
    try {
      // try to parse binary
      t.data = t.messageType.parseFromBinary(data);
    } catch (e) {
      // error while parsing
      t.error = new ParsingError(e as Error);
    }

    return copy as SubMessage<unknown>;
  }

  parseBinaryData(data: number[]) {
    this.data = this.messageType.parseFromBinary(data);
  }

  convertToBinary() {
    let binData: number[] = this.data && this.binaryData ? this.binaryData : [];
    return [binData.length + 1, this.id, ...binData];
  }
}
