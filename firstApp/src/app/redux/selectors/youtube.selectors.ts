import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectCustomCards = createFeatureSelector('customCardsState');
export const selectCustomCardsInfo = createSelector(selectCustomCards, (state: any) => state.data);
