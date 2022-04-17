import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { VideoItem } from 'src/app/models/youtubeResponse';
import { environment } from '../../../environments/environment';
import { APIVideosReducer } from './APIVideos.reducers';
import { customCardsReducer } from './customCards.reducers';
import { errorReducer } from './error.reducers';

export interface State {
  APIVideosState: VideoItem[];
  customCardsState: any;
  errorState: string;
}

export const reducers: ActionReducerMap<State> = {
  APIVideosState: APIVideosReducer,
  customCardsState: customCardsReducer,
  errorState: errorReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
