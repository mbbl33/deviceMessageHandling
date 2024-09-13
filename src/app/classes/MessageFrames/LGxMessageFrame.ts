import { LightCurtainConfig } from '../DeviceCommunicationConfigs/LightCuratinConfig';
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
import { WordArray_Message } from '../SubMessageTypes/WordArray_Message';
import { MessageFrame } from './MessageFrame';

export class LGxMessageFrame extends MessageFrame {
  definedSubMessages: SubMessage<unknown>[] = LightCurtainConfig.submessages;
}
/*
 [ //sender
    new LGxSubMessage(0x1, new ASCII_Message()), //Type name
    new LGxSubMessage(0x2, new Date_Message()), //Production date
    new LGxSubMessage(0x3, new SoftwareVersion_Message()), // Software version
    new LGxSubMessage(0x4, new Byte_Message()), // Hardware version
    new LGxSubMessage(0x5, new ProtocolVersion_Message()), //Protocolv ersion
    //0x06 - 0xA currently not used

    // reciver infos
    new LGxSubMessage(0xb, new ASCII_Message()), //Type name
    new LGxSubMessage(0xc, new Date_Message()), //Production date
    new LGxSubMessage(0xd, new SoftwareVersion_Message()), // Software version
    new LGxSubMessage(0xe, new Byte_Message()), // Hardware version
    new LGxSubMessage(0xf, new ProtocolVersion_Message()), //Protocol version
    //0x10 - 0x14 currently not used

    //sender
    new LGxBeamNumberMessage(0x15),
    new LGxVoltageMessage(0x16),
    new LGxBeamNumberMessage(0x17),
    new LGxVoltageMessage(0x18),

    // ids that only avaible when sender and reciver are avaiable
    new LGxSubMessage(0x19, new _64Bit_BoolArray_Message()),
    new LGxSubMessage(0x1a, new Byte_Message()),
    new LGxSubMessage(0x1b, new _64Bit_BoolArray_Message()),
    new LGxSubMessage(0x1c, new WordArray_Message()),
    new LGxSubMessage(0x1d, new ByteArray_Message()),
    new LGxSubMessage(0x1e, new WordArray_Message()),
    new LGxSubMessage(0x1f, new Bool_Message()),
  ]; */
