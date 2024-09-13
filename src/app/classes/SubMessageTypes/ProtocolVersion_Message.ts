import { DeviceProtocolVersion } from '../Model/DeviceProtocolVersion';
import {
  FixedSizedSubMessage,
  MessageSizeValidator,
  SubMessageDataTypes,
} from './SubMessageDataTypes';

export class ProtocolVersion_Message
  extends SubMessageDataTypes<DeviceProtocolVersion>
  implements SubMessageDataTypes<DeviceProtocolVersion>, FixedSizedSubMessage
{
  readonly expectedByteSize: number = 2;
  readonly messageSizeValidator: MessageSizeValidator =
    new MessageSizeValidator();
  override parseFromBinary(binaryData: number[]): DeviceProtocolVersion {
    this.messageSizeValidator.validate(
      this.expectedByteSize,
      binaryData.length
    );
    return new DeviceProtocolVersion(binaryData[0], binaryData[1]);
  }
}
