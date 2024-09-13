import { SubMessage } from '../SubMessages.ts/SubMessage';
import { ClassEnum } from 'class-enum';
import { SubMessageDataTypes } from '../SubMessageTypes/SubMessageDataTypes';
import { MessageFrame } from '../MessageFrames/MessageFrame';
import { ActionCreator } from '@ngrx/store';
//https://www.npmjs.com/package/class-enum
export abstract class DeviceCommunicationConfig extends ClassEnum<DeviceCommunicationConfig> {
  private readonly _id: number;
  private readonly _submessage: SubMessage<unknown>;
  private readonly _actionCreator: ActionCreator;
  constructor(
    value: string,
    id: number,
    submessage: SubMessageDataTypes<unknown> | SubMessage<unknown>,
    private readonly submessageCtor: new (
      id: number,
      data: SubMessageDataTypes<unknown>
    ) => SubMessage<unknown>,
    actionCreator: ActionCreator
  ) {
    super(value);
    this._id = id;
    if (submessage instanceof SubMessageDataTypes) {
      this._submessage = new submessageCtor(id, submessage);
    } else {
      this._submessage = submessage;
    }
    this._actionCreator = actionCreator;
  }

  get submessage() {
    return this._submessage;
  }

  get id() {
    return this._id;
  }

  get actionCreator() {
    return this._actionCreator;
  }

  static get submessages() {
    const values = this.values() as DeviceCommunicationConfig[];
    return values.map((value) => value.submessage);
  }

  static get creatorActions() {
    const values = this.values() as DeviceCommunicationConfig[];
    return values.map((value) => value._actionCreator);
  }

  static get creatorActionMap() {
    const out = new Map<number, ActionCreator>();
    const values = this.values() as DeviceCommunicationConfig[];
    values.forEach((value) => out.set(value._id, value._actionCreator));
    return out;
  }

  requestMessage() {
    //create sub message without payload
    return new this.submessageCtor(this._id, this._submessage.messageType);
  }
}
