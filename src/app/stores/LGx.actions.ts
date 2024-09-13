// src/app/state/lgx.actions.ts
import { createAction, props } from '@ngrx/store';
import { DeviceSoftwareVerison } from '../classes/Model/DeviceSoftwareVersion';
import { DeviceProtocolVersion } from '../classes/Model/DeviceProtocolVersion';

export const setCurrentSelectedLG = createAction(
  '[LGx] Set Current Selected LG',
  props<{ currentSelcetedLG: number }>() // Passe den Typ an
);

export const setCurrentRecivedLG = createAction(
  '[LGx] Set Current Received LG',
  props<{ currentRecivedLG: number }>() // Passe den Typ an
);

export const setIsPair = createAction(
  '[LGx] Set Is Pair',
  props<{ isPair: boolean }>()
);

export const setSenderTypeName = createAction(
  '[LGx] Set Sender Type Name',
  props<{ senderTypeName: string }>()
);

export const setSenderProductionDate = createAction(
  '[LGx] Set Sender Production Date',
  props<{ senderProductionDate: Date }>()
);

export const setSenderSoftwareVersion = createAction(
  '[LGx] Set Sender Software Version',
  props<{ senderSoftwareVersion: DeviceSoftwareVerison }>()
);

export const setSenderHardwareVersion = createAction(
  '[LGx] Set Sender Hardware Version',
  props<{ senderHardwareVersion: number }>()
);

export const setSenderProtokollVersion = createAction(
  '[LGx] Set Sender Protokoll Version',
  props<{ senderProtokollVersion: DeviceProtocolVersion }>()
);

export const setSenderBeamNumber = createAction(
  '[LGx] Set Sender Beam Number',
  props<{ senderBeamNumber: number }>()
);

export const setSenderVoltage = createAction(
  '[LGx] Set Sender Voltage',
  props<{ senderVoltage: number }>()
);

export const setReciverTypeName = createAction(
  '[LGx] Set Receiver Type Name',
  props<{ reciverTypeName: string }>()
);

export const setReciverProductionDate = createAction(
  '[LGx] Set Receiver Production Date',
  props<{ reciverProductionDate: Date }>()
);

export const setReciverSoftwareVersion = createAction(
  '[LGx] Set Receiver Software Version',
  props<{ reciverSoftwareVersion: DeviceSoftwareVerison }>()
);

export const setReciverHardwareVersion = createAction(
  '[LGx] Set Receiver Hardware Version',
  props<{ reciverHardwareVersion: number }>()
);

export const setReciverProtokollVersion = createAction(
  '[LGx] Set Receiver Protokoll Version',
  props<{ reciverProtokollVersion: DeviceProtocolVersion }>()
);

export const setReciverBeamNumber = createAction(
  '[LGx] Set Receiver Beam Number',
  props<{ reciverBeamNumber: number }>()
);

export const setReciverVoltage = createAction(
  '[LGx] Set Receiver Voltage',
  props<{ reciverVoltage: number }>()
);

// Pair-specific actions

export const setSignaleQuality = createAction(
  '[LGx] Set Signale Quality',
  props<{ supressedBeams: number[] }>()
);
export const setSupressedBeams = createAction(
  '[LGx] Set Suppressed Beams',
  props<{ supressedBeams: number[] }>()
);

export const setSaftyArea = createAction(
  '[LGx] Set Safety Area',
  props<{ saftyArea: number }>()
);

export const setTriggeredBeams = createAction(
  '[LGx] Set Triggered Beams',
  props<{ triggeredBeams: number[] }>()
);

export const setBeamPositions = createAction(
  '[LGx] Set Beam Positions',
  props<{ beamPositions: number[] }>()
);

export const setLedState = createAction(
  '[LGx] Set LED State',
  props<{ ledState: boolean }>()
);
