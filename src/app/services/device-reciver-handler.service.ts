import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { MessageFrame } from '../classes/MessageFrames/MessageFrame';
import { messageBinFrameFeature } from '../stores/MessageFrame.store';
import { LGxMessageFrame } from '../classes/MessageFrames/LGxMessageFrame';
import { LightCurtainConfig } from '../classes/DeviceCommunicationConfigs/LightCuratinConfig';

@Injectable({
  providedIn: 'root',
})
export class DeviceReciverHandlerService {
  constructor(private store: Store) {
    store
      .select(messageBinFrameFeature.selectMessageBinFrame)
      .subscribe((m) => {
        console.log('recived', m);
        this.handleRecivedMessage(m);
      });
  }

  handleRecivedMessage(binMessage: number[]) {
    const message = LGxMessageFrame.parseFromBinary(binMessage);

    message.subMessages.forEach((sub) => {
      console.log('recived sub', sub.id, sub.data);
      const creatorAction = LightCurtainConfig.creatorActionMap.get(sub.id); //TODO filter missing and filter error messages and push to seperate queue
    });
  }
}
