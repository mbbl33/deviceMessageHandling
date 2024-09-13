import { Component, NgModule, isDevMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { LGxMessageFrame } from './app/classes/MessageFrames/LGxMessageFrame';
import { provideState, provideStore } from '@ngrx/store';
import { messageBinFrameFeature } from './app/stores/MessageFrame.store';
import { TorSteuerungTsComponent, tstRequestStore } from './app/components/tor-steuerung.ts/tor-steuerung.component';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { lgxFeature } from './app/stores/LGx.store';
import { LightCurtainConfig } from './app/classes/DeviceCommunicationConfigs/LightCuratinConfig';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TorSteuerungTsComponent],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
    <app-tor-steuerung></app-tor-steuerung>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [provideStore(), provideState(messageBinFrameFeature), provideState(lgxFeature), provideStoreDevtools({
    maxAge: 25, // Retains last 25 states
    logOnly: !isDevMode(), // Restrict extension to log-only mode
    autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
    traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    connectInZone: true // If set to true, the connection is established within the Angular zone
  })],

});

/*const t = LGxMessageFrame.parseFromBinary([
  12, 1, 72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100,
]);
console.log(t);
console.log(t.convertToBinary());
const t2 = LGxMessageFrame.parseFromBinary([3, 2, 49, 44]);

console.log(t2);*/
tstRequestStore.next(
  LGxMessageFrame.createFromSubMessages(
    LightCurtainConfig.SENDER_BEAM_NUMBER.getEmptyMessage(),
    LightCurtainConfig.RECEIVER_PRODUCTION_DATE.getEmptyMessage(),
    LightCurtainConfig.RECEIVER_TYPE_NAME.getEmptyMessage()
  )
)