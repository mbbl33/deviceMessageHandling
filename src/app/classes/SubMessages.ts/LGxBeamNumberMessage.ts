import { Byte_Message } from '../SubMessageTypes/Byte_Message';
import { LGxSubMessage } from './LGxSubMessage';

export class LGxBeamNumberMessage extends LGxSubMessage<number> {
  constructor(id: number) {
    super(id, new Byte_Message());
  }
}
