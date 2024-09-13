import { Component } from '@angular/core';
import { ActionCreator, Store } from '@ngrx/store';
import { setMessageFrame } from '../../stores/MessageFrameActions';
import { LGxMessageFrame } from '../../classes/MessageFrames/LGxMessageFrame';
import { LightCurtainConfig } from '../../classes/DeviceCommunicationConfigs/LightCuratinConfig';
import { SubMessage } from '../../classes/SubMessages.ts/SubMessage';
import { messageBinFrameFeature } from '../../stores/MessageFrame.store';
import { DeviceReciverHandlerService } from '../../services/device-reciver-handler.service';
import { BehaviorSubject } from 'rxjs';
import { MessageFrame } from '../../classes/MessageFrames/MessageFrame';

export const tstRequestStore = new BehaviorSubject<MessageFrame>(new LGxMessageFrame());
@Component({
  selector: 'app-tor-steuerung',
  standalone: true,
  imports: [],
  templateUrl: './tor-steuerung.component.html',
  styleUrl: './tor-steuerung.component.css',
})
export class TorSteuerungTsComponent {
  constructor(
    private store: Store,
    reciverHandler: DeviceReciverHandlerService
  ) {
    /* const lightBeams = LightCurtainConfig.SENDER_BEAM_NUMBER
       .getEmptyMessage() as SubMessage<number>;
     lightBeams.data = 56;
     const productionDate = LightCurtainConfig.RECEIVER_PRODUCTION_DATE
       .getEmptyMessage() as SubMessage<Date>;
     productionDate.data = new Date();
     const typeName = LightCurtainConfig.RECEIVER_TYPE_NAME
       .getEmptyMessage() as SubMessage<string>;
     typeName.data = 'hallo welt';
     const sendFrame = LGxMessageFrame.createFromSubMessages(
       lightBeams,
       productionDate,
       typeName
     );
 
    */
     tstRequestStore.subscribe(
      m => this.respond(m)
     )
  }

  respond(messageFrame: MessageFrame) {
    const out : SubMessage<unknown>[]= []
    messageFrame.subMessages.forEach(
      (sub) => { 
        const subRespond = this.getRespondMessage(sub.id);
        if(!subRespond) return;
        out.push(subRespond);
       }
    )
    const sendFrame = LGxMessageFrame.createFromSubMessages(...out)
    this.store.dispatch(
      setMessageFrame({ messageBinFrame: sendFrame.convertToBinary() })
    );
  }

  getRespondMessage(id: number) {
    switch (id) {
      case LightCurtainConfig.RECEIVER_PRODUCTION_DATE.id:
        const productionDate = LightCurtainConfig.RECEIVER_PRODUCTION_DATE
          .getEmptyMessage() as SubMessage<Date>;
        productionDate.data = new Date();
        return productionDate;
      case LightCurtainConfig.RECEIVER_TYPE_NAME.id:
        const typeName = LightCurtainConfig.RECEIVER_TYPE_NAME
          .getEmptyMessage() as SubMessage<string>;
        typeName.data = 'hallo welt';
        return typeName;
      case LightCurtainConfig.SENDER_BEAM_NUMBER.id:
        const lightBeams = LightCurtainConfig.SENDER_BEAM_NUMBER
          .getEmptyMessage() as SubMessage<number>;
        lightBeams.data = 56;
        return lightBeams
      default:
        console.warn("TST Respons not defined for ID", id)
        return;
    }
  }
}
