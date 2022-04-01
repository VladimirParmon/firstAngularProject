import { createReducer, on } from '@ngrx/store';

import { storeCustomCards } from '../actions/youtube.actions';

const initialState = {
  data: [],
};

export const customCardsReducer = createReducer(
  initialState,
  on(storeCustomCards, (state: any, action) => ({
    ...state,
    data: [
      ...state.data,
      {
        info: action.info,
      },
    ],
  }))
);
