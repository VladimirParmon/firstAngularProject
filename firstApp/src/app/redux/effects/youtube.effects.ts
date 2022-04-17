import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadAPIVideos, loadAPIVideosFailure, loadAPIVideosSuccess } from '../actions/youtube.actions';
import { DataService } from '../../youtube/services/data.service';
import { catchError, debounceTime, distinctUntilChanged, EMPTY, map, mergeMap, Observable, of, switchMap } from 'rxjs';
import { VideoItem } from 'src/app/models/youtubeResponse';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class YoutubeEffects {
  getDataFromYoutubeAPI$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadAPIVideos),
        debounceTime(1000),
        distinctUntilChanged(),
        mergeMap((actionPayload) =>
          this.service.getVideos(actionPayload.string).pipe(
            map((data: VideoItem[]) => loadAPIVideosSuccess({ videos: data })),
            catchError((error: HttpErrorResponse) => {
              const errorMessage = this.service.getMessageFromError(error);
              return of(loadAPIVideosFailure({ errorMessage: errorMessage }));
            })
          )
        )
      )
    // { dispatch: false }
  );

  constructor(private actions$: Actions, public service: DataService) {}
}
