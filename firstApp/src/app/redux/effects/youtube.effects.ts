import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadAPIVideos, loadAPIVideosSuccess, storeAPIVideos } from '../actions/youtube.actions';
import { DataService } from '../../youtube/services/data.service';
import { catchError, EMPTY, map, mergeMap, switchMap } from 'rxjs';

@Injectable()
export class YoutubeEffects {
  getDataFromYoutubeAPI$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadAPIVideos),
        mergeMap((action) => this.service.getVideos(action).pipe(map((data) => loadAPIVideosSuccess(data)))),
        catchError((error) => {
          console.log(error);
          return EMPTY;
        })
      )
    // { dispatch: false }
  );

  // addUserToLocalStorage$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(fromAuthActions.loginSuccess),
  //       tap((action) =>
  //         localStorage.setItem('user', JSON.stringify(action.user))
  //       )
  //     ),
  //   { dispatch: false }
  // );

  // sendMessage$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(fromSupportActions.sendingCustomerSupportMessage),
  //     mergeMap((action) =>
  //       this.customerSupportService
  //         .sendMessage(action.data)
  //         .pipe(
  //           map((bool) =>
  //             fromSupportActions.sendMessageStatus({ isSentSuccess: bool })
  //           )
  //         )
  //     )
  //   );
  // });

  constructor(private actions$: Actions, public service: DataService) {}
}
