import { createFeature, createReducer, on, Action, createAction } from '@ngrx/store';
import { DeviceProtocolVersion } from '../classes/Model/DeviceProtocolVersion';
import { DeviceSoftwareVerison } from '../classes/Model/DeviceSoftwareVersion';
import { setSenderTypeName, setSenderProductionDate, setSenderSoftwareVersion, setSenderHardwareVersion, setSenderProtokollVersion, setSenderBeamNumber, setSenderVoltage, setReciverTypeName, setReciverProductionDate, setReciverSoftwareVersion, setReciverHardwareVersion, setReciverProtokollVersion, setReciverBeamNumber, setReciverVoltage, setSignaleQuality, setSupressedBeams, setSaftyArea, setTriggeredBeams, setBeamPositions, setLedState } from './LGx.actions';
interface LGxState {
    senderTypeName: string;
    senderProductionDate: Date;
    senderSoftwareVersion: DeviceSoftwareVerison;
    senderHardwareVersion: number;
    senderProtokollVersion: DeviceProtocolVersion;
    senderBeamNumber: number;
    senderVoltage: number;
    reciverTypeName: string;
    reciverProductionDate: Date;
    reciverSoftwareVersion: DeviceSoftwareVerison;
    reciverHardwareVersion: number;
    reciverProtokollVersion: DeviceProtocolVersion;
    reciverBeamNumber: number;
    reciverVoltage: number;
    //pair
    signaleQuality: number[];
    supressedBeams: boolean[];
    saftyArea: number;
    triggeredBeams: boolean[];
    beamPositions: number[];
    //todo graph data ,
    ledState: boolean;
  };


  //TODO: default value maybe undefined
const initialState: LGxState = {
    senderTypeName: '',
    senderProductionDate: new Date(),
    senderSoftwareVersion: new DeviceSoftwareVerison(0, 0, 0),
    senderHardwareVersion: 0,
    senderProtokollVersion: new DeviceProtocolVersion(0, 0),
    senderBeamNumber: 0,
    senderVoltage: 0,
    reciverTypeName: '',
    reciverProductionDate: new Date(),
    reciverSoftwareVersion: new DeviceSoftwareVerison(0, 0, 0),
    reciverHardwareVersion: 0,
    reciverProtokollVersion: new DeviceProtocolVersion(0, 0),
    reciverBeamNumber: 0,
    reciverVoltage: 0,
    //pair
    signaleQuality: [],
    supressedBeams: [],
    saftyArea: 0,
    triggeredBeams: [],
    beamPositions: [],
    //todo graph data ,
    ledState: false,
};



export const reducer = createReducer(
  initialState,
  on(setSenderTypeName, (state, { value }) => ({ ...state, senderTypeName: value })),
  on(setSenderProductionDate, (state, { value }) => ({ ...state, senderProductionDate: value })),
  on(setSenderSoftwareVersion, (state, { value }) => ({ ...state, senderSoftwareVersion: value })),
  on(setSenderHardwareVersion, (state, { value }) => ({ ...state, senderHardwareVersion: value })),
  on(setSenderProtokollVersion, (state, { value }) => ({ ...state, senderProtokollVersion: value })),
  on(setSenderBeamNumber, (state, { value }) => ({ ...state, senderBeamNumber: value })),
  on(setSenderVoltage, (state, { value }) => ({ ...state, senderVoltage: value })),
  on(setReciverTypeName, (state, { value }) => ({ ...state, reciverTypeName: value })),
  on(setReciverProductionDate, (state, { value }) => ({ ...state, reciverProductionDate: value })),
  on(setReciverSoftwareVersion, (state, { value }) => ({ ...state, reciverSoftwareVersion: value })),
  on(setReciverHardwareVersion, (state, { value }) => ({ ...state, reciverHardwareVersion: value })),
  on(setReciverProtokollVersion, (state, { value }) => ({ ...state, reciverProtokollVersion: value })),
  on(setReciverBeamNumber, (state, { value }) => ({ ...state, reciverBeamNumber: value })),
  on(setReciverVoltage, (state, { value }) => ({ ...state, reciverVoltage: value })),
  on(setSignaleQuality, (state, { value }) => ({ ...state, signaleQuality: value })),
  on(setSupressedBeams, (state, { value }) => ({ ...state, supressedBeams: value })),
  on(setSaftyArea, (state, { value }) => ({ ...state, saftyArea: value })),
  on(setTriggeredBeams, (state, { value }) => ({ ...state, triggeredBeams: value })),
  on(setBeamPositions, (state, { value }) => ({ ...state, beamPositions: value })),
  on(setLedState, (state, { value }) => ({ ...state, ledState: value }))
);



export const lgxFeature = createFeature({
  name: 'lgxFeature',
  reducer
})
