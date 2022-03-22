import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { catchError, finalize, Observable, throwError } from 'rxjs';

@Injectable()
export class YoutubeInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const api_key = 'AIzaSyBZHwRCNdd5Rw9OjNg8MlRfcP-8EXg-d3Q';
    const url = 'https://www.googleapis.com/youtube/v3';
    return next.handle(
      request.clone({
        url: `${url}/${request.url}`,
        setParams: {
          key: api_key,
        },
      })
    );
  }
}
