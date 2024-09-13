import { createFeature, createReducer, on } from '@ngrx/store';
import { MessageFrame } from '../classes/MessageFrames/MessageFrame';
import { clearMessageFrame, setMessageFrame } from './MessageFrameActions';

interface State {
  messageBinFrame: number[];
  messageRecived: boolean;
}

const initialState: State = {
  messageBinFrame: [],
  messageRecived: false,
};

export const reducer = createReducer(
  initialState,
  on(setMessageFrame, (state, { messageBinFrame }) => ({
    ...state,
    messageBinFrame,
    messageRecived: true,
  })),
  on(clearMessageFrame, (state) => ({
    ...state,
    messageBinFrame: [],
    messageRecived: false,
  }))
);

// Definierung des Features
export const messageBinFrameFeature = createFeature({
  name: 'messageBinFrameFeature',
  reducer,
});
