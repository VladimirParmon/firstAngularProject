import { state } from '@angular/animations';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { map } from 'rxjs';

export const selectCustomCards = createFeatureSelector('customCardsState');
export const selectCustomCardsInfo = createSelector(selectCustomCards, (state: any) => state.data);

export const selectAPIData = createFeatureSelector('APIVideosState');
export const selectYoutubeAPIData = createSelector(selectAPIData, (state: any) => {
  if (state) {
    return Object.values(state).filter((el) => typeof el !== 'string');
  } else {
    return [];
  }
});
