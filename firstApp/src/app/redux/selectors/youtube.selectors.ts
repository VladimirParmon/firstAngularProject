import { State } from '../reducers/index';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { map } from 'rxjs';
import { VideoItem } from 'src/app/models/youtubeResponse';
import { CustomCard } from 'src/app/models/customCard';

export const selectCustomCards = createFeatureSelector<{ data: CustomCard[] }>('customCardsState');
export const selectCustomCardsInfo = createSelector(selectCustomCards, (state: { data: CustomCard[] }) => state.data);

export const selectAPIData = createFeatureSelector<VideoItem[]>('APIVideosState');
export const selectYoutubeAPIData = createSelector(selectAPIData, (state: VideoItem[]) => state);

export const selectErrorMessage = createFeatureSelector('errorState');
export const selectErrorMessageInfo = createSelector(selectErrorMessage, (state: any) => {
  if (state) {
    return state;
  } else {
    return '';
  }
});
