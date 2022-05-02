import { createReducer, on } from '@ngrx/store';
import { CustomCard } from 'src/app/models/customCard';

import { addCustomCard, deleteCustomCard } from '../actions/youtube.actions';

const initialState: { data: CustomCard[] } = {
  data: [],
};

export const customCardsReducer = createReducer(
  initialState,
  on(addCustomCard, (state: { data: CustomCard[] }, action: { info: CustomCard }) => ({
    ...state,
    data: [...state.data, action.info],
  })),
  on(deleteCustomCard, (state, action) => ({
    ...state,
    data: [...state.data.filter((el: CustomCard) => el.id !== action.cardId)],
  }))
);
