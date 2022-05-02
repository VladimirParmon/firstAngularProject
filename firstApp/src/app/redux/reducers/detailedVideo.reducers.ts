import { createReducer, on } from '@ngrx/store';
import { VideoItem } from 'src/app/models/youtubeResponse';

import { loadSingleAPIVideoSuccess } from '../actions/youtube.actions';

const initialState: VideoItem[] = [];

export const detailedVideoInfoReducer = createReducer(
  initialState,
  on(loadSingleAPIVideoSuccess, (state: VideoItem[], action: { video: VideoItem[] }) => action.video)
);
