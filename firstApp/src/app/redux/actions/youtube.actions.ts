import { createAction, props } from '@ngrx/store';
import { CustomCard } from 'src/app/models/customCard';
import { VideoItem } from 'src/app/models/youtubeResponse';

export const loadAPIVideos = createAction('[Youtube] load videos from YT API', props<{ string: string }>());
export const loadAPIVideosSuccess = createAction(
  '[Youtube] SUCCESS: load videos from YT API',
  props<{ videos: VideoItem[] }>()
);
export const loadAPIVideosFailure = createAction(
  '[Youtube] FAILURE: load videos from YT API',
  props<{ errorMessage: string }>()
);

export const addCustomCard = createAction('[Youtube] Add a custom card', props<{ info: CustomCard }>());
export const deleteCustomCard = createAction('[Youtube] Delete a custom card', props<any>());
