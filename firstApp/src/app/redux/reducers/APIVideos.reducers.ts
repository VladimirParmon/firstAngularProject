import { createReducer, on } from '@ngrx/store';

import { storeAPIVideos } from '../actions/youtube.actions';

const initialState = {};

export const APIVideosReducer = createReducer(
  initialState,
  on(storeAPIVideos, (state, action) => action)
);
