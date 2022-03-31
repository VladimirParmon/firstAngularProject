import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { APIVideosReducer } from './APIVideos.reducers';
import { customCardsReducer } from './customCard.reducers';

export interface State {
  APIVideosState: any;
  customCardsState: any;
}

export const initialState = {};

export const reducers: ActionReducerMap<State> = {
  APIVideosState: APIVideosReducer,
  customCardsState: customCardsReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
