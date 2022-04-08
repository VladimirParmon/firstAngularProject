import { createReducer, on } from '@ngrx/store';

import { loadAPIVideosFailure, loadAPIVideosSuccess } from '../actions/youtube.actions';

const initialState = {};

export const APIVideosReducer = createReducer(
  initialState,
  on(loadAPIVideosSuccess, (state, action) => action)
  // on(loadAPIVideosFailure, (state, action) => {
  //   console.log(action.error.error.error.message);
  //   return state;
  // })
);
