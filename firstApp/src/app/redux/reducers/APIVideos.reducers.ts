import { createReducer, on } from '@ngrx/store';

import { loadAPIVideos, loadAPIVideosSuccess, storeAPIVideos } from '../actions/youtube.actions';

const initialState = {};

export const APIVideosReducer = createReducer(
  initialState,
  on(loadAPIVideosSuccess, (state, action) => action)
);
