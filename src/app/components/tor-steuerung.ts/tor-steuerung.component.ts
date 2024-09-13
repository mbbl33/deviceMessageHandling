import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { setMessageFrame } from '../../stores/MessageFrameActions';
import { LGxMessageFrame } from '../../classes/MessageFrames/LGxMessageFrame';
import { LightCurtainConfig } from '../../classes/DeviceCommunicationConfigs/LightCuratinConfig';
import { SubMessage } from '../../classes/SubMessages.ts/SubMessage';
import { messageBinFrameFeature } from '../../stores/MessageFrame.store';
import { DeviceReciverHandlerService } from '../../services/device-reciver-handler.service';
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
    const lightBeams = LightCurtainConfig.SENDER_BEAM_NUMBER
      .submessage as SubMessage<number>;
    lightBeams.data = 56;
    const productionDate = LightCurtainConfig.RECEIVER_PRODUCTION_DATE
      .submessage as SubMessage<Date>;
    productionDate.data = new Date();
    const typeName = LightCurtainConfig.RECEIVER_TYPE_NAME
      .submessage as SubMessage<string>;
    typeName.data = 'hallo welt';
    const sendFrame = LGxMessageFrame.createFromSubMessages(
      lightBeams,
      productionDate,
      typeName
    );
    store.dispatch(
      setMessageFrame({ messageBinFrame: sendFrame.convertToBinary() })
    );
  }
}
