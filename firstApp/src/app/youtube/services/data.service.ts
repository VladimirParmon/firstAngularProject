import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  switchMap,
  map,
  mergeMap,
  tap,
  debounceTime,
  distinctUntilChanged,
  catchError,
  of,
  throwError,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  sortingStatus: Observable<string>;
  sortingStatusChange = new BehaviorSubject<string>('default');

  sortingString: Observable<string>;
  sortingStringChange = new BehaviorSubject<string>('');

  videosInfo: Observable<any>;
  videosInfoChange = new BehaviorSubject<any>('');

  detailedVideoInfo: any;
  errorSpan: string = '';

  constructor(private http: HttpClient) {
    this.sortingStatus = this.sortingStatusChange.asObservable();
    this.sortingString = this.sortingStringChange.asObservable();
    this.videosInfo = this.videosInfoChange.asObservable().pipe(debounceTime(1000), distinctUntilChanged());
  }

  updateSorting(value: string) {
    this.sortingStatusChange.next(value);
  }
  updateString(value: string) {
    this.sortingStringChange.next(value);
  }

  updateInfo(value: any) {
    this.videosInfoChange.next(value);
  }

  private fetchSearchResults(searchString: string) {
    return this.http.get(`search?q=${searchString}&maxResults=15`);
  }

  private fetchVideosById(array: any) {
    return this.http.get(`videos?id=${array}&part=snippet,statistics`);
  }

  private displayErrorInDOM(error: any) {
    const errorMessage = error.error.error.message;
    const regex = /(<([^>]+)>)/gi;
    this.errorSpan = errorMessage.replace(regex, '');
  }

  getVideos(searchString: string) {
    return this.fetchSearchResults(searchString)
      .pipe(
        switchMap((response: any) => {
          const searchResults = response.items.map((el: any) => el.id.videoId);
          return this.fetchVideosById(searchResults);
        }),
        map((el: any) => el.items),
        catchError((error) => {
          this.displayErrorInDOM(error);
          return of([]);
        })
      )
      .subscribe((data) => {
        return this.updateInfo(data);
      });
  }
}
