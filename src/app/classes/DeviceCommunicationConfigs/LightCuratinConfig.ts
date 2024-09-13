import { ActionCreator } from '@ngrx/store';
import { LGxBeamNumberMessage } from '../SubMessages.ts/LGxBeamNumberMessage';
import { LGxSubMessage } from '../SubMessages.ts/LGxSubMessage';
import { LGxVoltageMessage } from '../SubMessages.ts/LGxVoltageMessage';
import { SubMessage } from '../SubMessages.ts/SubMessage';
import { _64Bit_BoolArray_Message } from '../SubMessageTypes/_64Bit_BoolArray_Message';
import { ASCII_Message } from '../SubMessageTypes/ASCII_Message';
import { Bool_Message } from '../SubMessageTypes/Bool_Message';
import { Byte_Message } from '../SubMessageTypes/Byte_Message';
import { ByteArray_Message } from '../SubMessageTypes/ByteArray_Message';
import { Date_Message } from '../SubMessageTypes/Date_Message';
import { ProtocolVersion_Message } from '../SubMessageTypes/ProtocolVersion_Message';
import { SoftwareVersion_Message } from '../SubMessageTypes/SoftwareVersion_Message';
import { SubMessageDataTypes } from '../SubMessageTypes/SubMessageDataTypes';
import { WordArray_Message } from '../SubMessageTypes/WordArray_Message';
import { DeviceCommunicationConfig } from './DeviceCommunicationConfig';
import {
  setBeamPositions,
  setCurrentSelectedLG,
  setLedState,
  setReciverBeamNumber,
  setReciverHardwareVersion,
  setReciverProductionDate,
  setReciverProtokollVersion,
  setReciverSoftwareVersion,
  setReciverVoltage,
  setSaftyArea,
  setSenderBeamNumber,
  setSenderProductionDate,
  setSenderSoftwareVersion,
  setSenderTypeName,
  setSignaleQuality,
  setSupressedBeams,
  setTriggeredBeams,
} from '../../stores/LGx.actions';

export class LightCurtainConfig extends DeviceCommunicationConfig {
  public static readonly SENDER_TYPE_NAME = new LightCurtainConfig(
    'SENDER_TYPE_NAME',
    0x1,
    new ASCII_Message(),
    setCurrentSelectedLG
  );
  public static readonly SENDER_PRODUCTION_DATE = new LightCurtainConfig(
    'SENDER_PRODUCTION_DATE',
    0x2,
    new Date_Message(),
    setReciverProductionDate
  );
  public static readonly SENDER_SOFTWARE_VERSION = new LightCurtainConfig(
    'SENDER_SOFTWARE_VERSION',
    0x3,
    new SoftwareVersion_Message(),
    setSenderSoftwareVersion
  );
  public static readonly SENDER_HARDWARE_VERSION = new LightCurtainConfig(
    'SENDER_HARDWARE_VERSION',
    0x4,
    new ASCII_Message(),
    setSenderTypeName
  );
  public static readonly SENDER_PROTOCOL_VERSION = new LightCurtainConfig(
    'SENDER_PROTOCOL_VERSION',
    0x5,
    new ProtocolVersion_Message(),
    setSenderProductionDate
  );
  public static readonly RECEIVER_TYPE_NAME = new LightCurtainConfig(
    'RECEIVER_TYPE_NAME',
    0xb,
    new ASCII_Message(),
    setReciverProtokollVersion
  );
  public static readonly RECEIVER_PRODUCTION_DATE = new LightCurtainConfig(
    'RECEIVER_PRODUCTION_DATE',
    0xc,
    new Date_Message(),
    setReciverProductionDate
  );
  public static readonly RECEIVER_SOFTWARE_VERSION = new LightCurtainConfig(
    'RECEIVER_SOFTWARE_VERSION',
    0xd,
    new SoftwareVersion_Message(),
    setReciverSoftwareVersion
  );
  public static readonly RECEIVER_HARDWARE_VERSION = new LightCurtainConfig(
    'RECEIVER_HARDWARE_VERSION',
    0xe,
    new Byte_Message(),
    setReciverHardwareVersion
  );
  public static readonly RECEIVER_PROTOCOL_VERSION = new LightCurtainConfig(
    'RECEIVER_PROTOCOL_VERSION',
    0xf,
    new ProtocolVersion_Message(),
    setReciverProtokollVersion
  );
  public static readonly SENDER_BEAM_NUMBER = new LightCurtainConfig(
    'SENDER_BEAM_NUMBER',
    0x15,
    new LGxBeamNumberMessage(0x15),
    setSenderBeamNumber
  );
  public static readonly SENDER_VOLTAGE = new LightCurtainConfig(
    'SENDER_VOLTAGE',
    0x16,
    new LGxVoltageMessage(0x16),
    setReciverVoltage
  );
  public static readonly RECEIVER_BEAM_NUMBER = new LightCurtainConfig(
    'RECEIVER_BEAM_NUMBER',
    0x17,
    new LGxBeamNumberMessage(0x17),
    setReciverBeamNumber
  );
  public static readonly RECEIVER_VOLTAGE = new LightCurtainConfig(
    'RECEIVER_VOLTAGE',
    0x18,
    new LGxVoltageMessage(0x18),
    setReciverVoltage
  );
  public static readonly BEAM_SUPPRESION = new LightCurtainConfig(
    'BEAM_SUPPRESION',
    0x19,
    new _64Bit_BoolArray_Message(),
    setSupressedBeams
  );
  public static readonly SAFTY_AREA = new LightCurtainConfig(
    'SAFTY_AREA',
    0x1a,
    new Byte_Message(),
    setSaftyArea
  );
  public static readonly TRIGGERED_BEAMS = new LightCurtainConfig(
    'TRIGGERED_BEAMS',
    0x1b,
    new _64Bit_BoolArray_Message(),
    setTriggeredBeams
  );
  public static readonly BEAM_POSTIONS = new LightCurtainConfig(
    'BEAM_POSTIONS',
    0x1c,
    new WordArray_Message(),
    setBeamPositions
  );
  public static readonly SIGNALE_QUALITY = new LightCurtainConfig(
    'SIGNALE_QUALITY',
    0x1d,
    new ByteArray_Message(),
    setSignaleQuality
  );
  /* //todo adjust type public static readonly POSITION_GRAPH = new LightCurtainConfig( 
    'POSITION_GRAPH',
    0x1e,
    new WordArray_Message()
  );*/
  public static readonly LED_STATE = new LightCurtainConfig(
    'LED_STATE',
    0x1f,
    new Bool_Message(),
    setLedState
  );

  constructor(
    value: string,
    id: number,
    submessage: SubMessageDataTypes<unknown> | SubMessage<unknown>,
    actionCreator: ActionCreator
  ) {
    super(value, id, submessage, LGxSubMessage, actionCreator);
  }
}
