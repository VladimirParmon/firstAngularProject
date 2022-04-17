import { createReducer, on } from '@ngrx/store';

import { loadAPIVideosFailure } from '../actions/youtube.actions';

const initialState: string = '';

export const errorReducer = createReducer(
  initialState,
  on(loadAPIVideosFailure, (state, action) => action.errorMessage)
);
