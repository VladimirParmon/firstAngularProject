import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadAPIVideos,
  loadAPIVideosFailure,
  loadAPIVideosSuccess,
  loadSingleAPIVideo,
  loadSingleAPIVideoSuccess,
} from '../actions/youtube.actions';
import { DataService } from '../../youtube/services/data.service';
import { catchError, debounceTime, distinctUntilChanged, map, mergeMap, of } from 'rxjs';
import { APIVideoInfo, VideoItem } from 'src/app/models/youtubeResponse';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class YoutubeEffects {
  getDataFromYoutubeAPI$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAPIVideos),
      debounceTime(1000),
      distinctUntilChanged(),
      mergeMap((actionPayload: { string: string }) =>
        this.service.getVideos(actionPayload.string).pipe(
          map((data: VideoItem[]) => loadAPIVideosSuccess({ videos: data })),
          catchError((error: HttpErrorResponse) => {
            const errorMessage = this.service.getMessageFromError(error);
            return of(loadAPIVideosFailure({ errorMessage: errorMessage }));
          })
        )
      )
    )
  );

  getSingleVideoDataFromAPI$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSingleAPIVideo),
      mergeMap((actionPayload: { string: string[] }) =>
        this.service.fetchVideosById(actionPayload.string).pipe(
          map((data: APIVideoInfo) => data.items),
          map((data: VideoItem[]) => loadSingleAPIVideoSuccess({ video: data })),
          catchError((error: HttpErrorResponse) => {
            const errorMessage = this.service.getMessageFromError(error);
            return of(loadAPIVideosFailure({ errorMessage: errorMessage }));
          })
        )
      )
    )
  );

  constructor(private actions$: Actions, public service: DataService) {}
}
