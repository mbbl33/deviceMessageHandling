import { createAction, props } from '@ngrx/store';
import { MessageFrame } from '../classes/MessageFrames/MessageFrame';

// Aktion zum Setzen einer Nachricht
export const setMessageFrame = createAction(
  '[MessageFrame] Set MessageFrame',
  props<{ messageBinFrame: number[] }>()
);

// Aktion zum Leeren der Nachricht (optional)
export const clearMessageFrame = createAction(
  '[MessageFrame] Clear MessageFrame'
);
