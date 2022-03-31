import { createAction, props } from '@ngrx/store';

export const storeAPIVideos = createAction('[Youtube] StoreAPI', props<any>());
export const storeCustomCards = createAction('[Youtube] StoreCards', props<any>());

export interface APIVideosState {}

export interface CustomCardsState {}
