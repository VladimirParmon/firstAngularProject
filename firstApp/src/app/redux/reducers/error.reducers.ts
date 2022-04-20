import { createReducer, on } from '@ngrx/store';

import { loadAPIVideosFailure } from '../actions/youtube.actions';

const initialState: string = '';

export const errorReducer = createReducer(
  initialState,
  on(loadAPIVideosFailure, (state: string, action: { errorMessage: string }) => action.errorMessage)
);
