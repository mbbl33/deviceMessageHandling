import { DeviceProtocolVersion } from '../Model/DeviceProtocolVersion';
import { DeviceSoftwareVerison } from '../Model/DeviceSoftwareVersion';
import {
  FixedSizedSubMessage,
  MessageSizeValidator,
  SubMessageDataTypes,
} from './SubMessageDataTypes';

export class SoftwareVersion_Message
  extends SubMessageDataTypes<DeviceSoftwareVerison>
  implements SubMessageDataTypes<DeviceSoftwareVerison>, FixedSizedSubMessage
{
  readonly expectedByteSize: number = 3;
  readonly messageSizeValidator: MessageSizeValidator =
    new MessageSizeValidator();
  override parseFromBinary(binaryData: number[]): DeviceSoftwareVerison {
    this.messageSizeValidator.validate(
      this.expectedByteSize,
      binaryData.length
    );
    return new DeviceSoftwareVerison(
      binaryData[0],
      binaryData[1],
      binaryData[3]
    );
  }
}
