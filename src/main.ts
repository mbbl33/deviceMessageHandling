import { Component, NgModule } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { LGxMessageFrame } from './app/classes/MessageFrames/LGxMessageFrame';
import { provideState, provideStore } from '@ngrx/store';
import { messageBinFrameFeature } from './app/stores/MessageFrame.store';
import { TorSteuerungTsComponent } from './app/components/tor-steuerung.ts/tor-steuerung.component';

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
  providers: [provideStore(), provideState(messageBinFrameFeature)],
});

const t = LGxMessageFrame.parseFromBinary([
  12, 1, 72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100,
]);
console.log(t);
console.log(t.convertToBinary());
const t2 = LGxMessageFrame.parseFromBinary([3, 2, 49, 44]);

console.log(t2);
