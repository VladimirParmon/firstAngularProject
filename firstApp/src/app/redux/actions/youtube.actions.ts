import { createAction, props } from '@ngrx/store';

export const loadAPIVideos = createAction('[Youtube] load videos from YT API', props<any>());
export const loadAPIVideosSuccess = createAction('[Youtube] SUCCESS: load videos from YT API', props<any>());
export const loadAPIVideosFailure = createAction('[Youtube] FAILURE: load videos from YT API', props<any>());

export const addCustomCard = createAction('[Youtube] Add a custom card', props<any>());
export const deleteCustomCard = createAction('[Youtube] Delete a custom card', props<any>());

export interface APIVideosState {}

export interface CustomCardsState {}
