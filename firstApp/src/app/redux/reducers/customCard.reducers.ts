import { createReducer, on } from '@ngrx/store';

import { storeCustomCards } from '../actions/youtube.actions';

const initialState = {};

export const customCardsReducer = createReducer(
  initialState,
  on(storeCustomCards, (state, action) => ({
    ...state,
    customCardsState: action,
  }))
);
