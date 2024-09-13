import { DeviceProtocolVersion } from '../classes/Model/DeviceProtocolVersion';
import { DeviceSoftwareVerison } from '../classes/Model/DeviceSoftwareVersion';

interface LGxState {
  currentSelcetedLG: number | undefined;
  currentRecivedLG: number | undefined;
  isPair: boolean;
  data: {
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
}
const initialState: LGxState = {
  currentSelcetedLG: undefined,
  currentRecivedLG: undefined,
  isPair: false,
  data: {
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
  },
};
