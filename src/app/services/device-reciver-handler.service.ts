import { Injectable } from '@angular/core';
import { ActionCreator, Store } from '@ngrx/store';
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
        this.handleRecivedMessage(m);
      });
  }

  handleRecivedMessage(binMessage: number[]) {
    const message = LGxMessageFrame.parseFromBinary(binMessage);

    message.subMessages.forEach((sub) => {
      console.log('recived sub', sub.id, sub.data);
      let creatorAction = LightCurtainConfig.creatorActionMap.get(sub.id); //TODO: filter missing and filter error messages and push to seperate queue
      if(!creatorAction) return;
      // IMPORTANT !requires that action has always prob named value! TODO: finde a way to force all creatorAction to use DeviceProb!
      this.store.dispatch(creatorAction({value: sub.data}))
    });
  }
}
