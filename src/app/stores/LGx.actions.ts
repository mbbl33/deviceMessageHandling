// src/app/state/lgx.actions.ts
import { createAction, props } from '@ngrx/store';
import { DeviceSoftwareVerison } from '../classes/Model/DeviceSoftwareVersion';
import { DeviceProtocolVersion } from '../classes/Model/DeviceProtocolVersion';
import { DeviceProb } from '../classes/DeviceCommunicationConfigs/DeviceCommunicationConfig';


export enum LGxActionTypes {
  SetSenderTypeName = "[LGx] Set Sender Type Name",
  SetSenderProductionDate = "[LGx] Set Sender Production Date",
  SetSenderSoftwareVersion = "[LGx] Set Sender Software Version",
  SetSenderHardwareVersion = "[LGx] Set Sender Hardware Version",
  SetSenderProtokollVersion = "[LGx] Set Sender Protokoll Version",
  SetSenderBeamNumber = "[LGx] Set Sender Beam Number",
  SetSenderVoltage = "[LGx] Set Sender Voltage",
  SetReciverTypeName = "[LGx] Set Receiver Type Name",
  SetReciverProductionDate = "[LGx] Set Receiver Production Date",
  SetReciverSoftwareVersion = "[LGx] Set Receiver Software Version",
  SetReciverHardwareVersion = "[LGx] Set Receiver Hardware Version",
  SetReciverProtokollVersion = "[LGx] Set Receiver Protokoll Version",
  SetReciverBeamNumber = "[LGx] Set Receiver Beam Number",
  SetReciverVoltage = "[LGx] Set Receiver Voltage",
  SetSignaleQuality = "[LGx] Set Signale Quality",
  SetSupressedBeams = "[LGx] Set Suppressed Beams",
  SetSaftyArea = "[LGx] Set Safety Area",
  SetTriggeredBeams = "[LGx] Set Triggered Beams",
  SetBeamPositions = "[LGx] Set Beam Positions",
  SetLedState = "[LGx] Set LED State",
}


export const setSenderTypeName = createAction(
  '[LGx] Set Sender Type Name',
  props<DeviceProb<string>>()
);

export const setSenderProductionDate = createAction(
  '[LGx] Set Sender Production Date',
  props<DeviceProb<Date>>()
);

export const setSenderSoftwareVersion = createAction(
  '[LGx] Set Sender Software Version',
  props<DeviceProb<DeviceSoftwareVerison >>()
);

export const setSenderHardwareVersion = createAction(
  '[LGx] Set Sender Hardware Version',
  props<DeviceProb<number >>()
);

export const setSenderProtokollVersion = createAction(
  '[LGx] Set Sender Protokoll Version',
  props<DeviceProb<DeviceProtocolVersion >>()
);

export const setSenderBeamNumber = createAction(
  '[LGx] Set Sender Beam Number',
  props<DeviceProb<number >>()
);

export const setSenderVoltage = createAction(
  '[LGx] Set Sender Voltage',
  props<DeviceProb<number >>()
);

export const setReciverTypeName = createAction(
  '[LGx] Set Receiver Type Name',
  props<DeviceProb<string >>()
);

export const setReciverProductionDate = createAction(
  '[LGx] Set Receiver Production Date',
  props<DeviceProb<Date >>()
);

export const setReciverSoftwareVersion = createAction(
  '[LGx] Set Receiver Software Version',
  props<DeviceProb<DeviceSoftwareVerison >>()
);

export const setReciverHardwareVersion = createAction(
  '[LGx] Set Receiver Hardware Version',
  props<DeviceProb<number >>()
);

export const setReciverProtokollVersion = createAction(
  '[LGx] Set Receiver Protokoll Version',
  props<DeviceProb<DeviceProtocolVersion >>()
);

export const setReciverBeamNumber = createAction(
  '[LGx] Set Receiver Beam Number',
  props<DeviceProb<number >>()
);

export const setReciverVoltage = createAction(
  '[LGx] Set Receiver Voltage',
  props<DeviceProb<number >>()
);

// Pair-specific actions

export const setSignaleQuality = createAction(
  '[LGx] Set Signale Quality',
  props<DeviceProb<number[] >>()
);
export const setSupressedBeams = createAction(
  '[LGx] Set Suppressed Beams',
  props<DeviceProb<boolean[] >>()
);

export const setSaftyArea = createAction(
  '[LGx] Set Safety Area',
  props<DeviceProb<number >>()
);

export const setTriggeredBeams = createAction(
  '[LGx] Set Triggered Beams',
  props<DeviceProb<boolean[] >>()
);

export const setBeamPositions = createAction(
  '[LGx] Set Beam Positions',
  props<DeviceProb<number[] >>()
);

export const setLedState = createAction(
  '[LGx] Set LED State',
  props<DeviceProb<boolean >>()
);