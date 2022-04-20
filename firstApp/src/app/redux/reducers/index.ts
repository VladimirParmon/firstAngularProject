import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { CustomCard } from 'src/app/models/customCard';
import { VideoItem } from 'src/app/models/youtubeResponse';
import { environment } from '../../../environments/environment';
import { APIVideosReducer } from './APIVideos.reducers';
import { customCardsReducer } from './customCards.reducers';
import { detailedVideoInfoReducer } from './detailedVideo.reducers';
import { errorReducer } from './error.reducers';

export interface State {
  APIVideosState: VideoItem[];
  detailedVideoInfoState: VideoItem[];
  customCardsState: {
    data: CustomCard[];
  };
  errorState: string;
}

export const reducers: ActionReducerMap<State> = {
  APIVideosState: APIVideosReducer,
  customCardsState: customCardsReducer,
  detailedVideoInfoState: detailedVideoInfoReducer,
  errorState: errorReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
