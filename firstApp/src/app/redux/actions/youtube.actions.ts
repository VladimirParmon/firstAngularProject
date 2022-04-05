import { createAction, props } from '@ngrx/store';

export const storeAPIVideos = createAction('[Youtube] StoreAPI', props<any>());
export const storeCustomCards = createAction('[Youtube] StoreCards', props<any>());

export const loadAPIVideos = createAction('[Youtube] load videos from YT API', props<any>());
export const loadAPIVideosSuccess = createAction('[Youtube] SUCCESS: load videos from YT API', props<any>());

export interface APIVideosState {}

export interface CustomCardsState {}
