import { createReducer, on } from '@ngrx/store';
import { VideoItem } from 'src/app/models/youtubeResponse';

import { loadAPIVideosSuccess } from '../actions/youtube.actions';

const initialState: VideoItem[] = [];

export const APIVideosReducer = createReducer(
  initialState,
  on(loadAPIVideosSuccess, (state, action) => action.videos)
);
