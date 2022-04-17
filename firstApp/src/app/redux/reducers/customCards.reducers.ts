import { createReducer, on } from '@ngrx/store';

import { addCustomCard, deleteCustomCard } from '../actions/youtube.actions';

const initialState = {
  data: [],
};

export const customCardsReducer = createReducer(
  initialState,
  on(addCustomCard, (state: any, action) => ({
    ...state,
    data: [...state.data, action.info],
  }))
);
