import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadAPIVideos, loadAPIVideosFailure, loadAPIVideosSuccess, storeAPIVideos } from '../actions/youtube.actions';
import { DataService } from '../../youtube/services/data.service';
import { catchError, debounceTime, distinctUntilChanged, EMPTY, map, mergeMap, of, switchMap } from 'rxjs';

@Injectable()
export class YoutubeEffects {
  getDataFromYoutubeAPI$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadAPIVideos),
        debounceTime(1000),
        distinctUntilChanged(),
        mergeMap((action) =>
          this.service.getVideos(action.string).pipe(
            map((data) => loadAPIVideosSuccess(data))
            // catchError((error) => of(loadAPIVideosFailure({ error: error })))
          )
        )
      )
    // { dispatch: false }
  );

  constructor(private actions$: Actions, public service: DataService) {}
}
