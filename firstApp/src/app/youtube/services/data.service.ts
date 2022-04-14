import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  debounceTime,
  distinctUntilChanged,
  map,
  Observable,
  of,
  Subject,
  switchMap,
} from 'rxjs';
import { SortingStatus } from 'src/app/models/sortingLogic';
import { APIVideoInfo, VideoItem } from 'src/app/models/youtubeResponse';
import { SearchList, SearchListItem } from 'src/app/models/youtubeSearchList';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  sortingStatus$: Observable<SortingStatus>;
  sortingStatus$$ = new BehaviorSubject<SortingStatus>('default');

  sortingString$: Observable<string>;
  sortingString$$ = new BehaviorSubject<string>('');

  videosInfo$: Observable<VideoItem[]>;
  videosInfo$$ = new Subject<VideoItem[]>();

  detailedVideoInfo!: VideoItem;
  errorSpan: string = '';

  constructor(private http: HttpClient) {
    this.sortingStatus$ = this.sortingStatus$$.asObservable();
    this.sortingString$ = this.sortingString$$.asObservable();
    this.videosInfo$ = this.videosInfo$$.asObservable().pipe(debounceTime(1000), distinctUntilChanged());
  }

  updateSortingStatus(status: SortingStatus): void {
    this.sortingStatus$$.next(status);
  }
  updateSortingString(value: string): void {
    this.sortingString$$.next(value);
  }

  updateInfo(info: VideoItem[]): void {
    const array = Object.values(info).filter((el) => typeof el !== 'string') as VideoItem[];
    this.videosInfo$$.next(array);
  }

  private fetchSearchResults(searchString: string): Observable<SearchList> {
    return this.http.get<SearchList>(`search?q=${searchString}&maxResults=15&&type=video`);
  }

  private fetchVideosById(arrayOfIDs: string[]): Observable<APIVideoInfo> {
    return this.http.get<APIVideoInfo>(`videos?id=${arrayOfIDs}&part=snippet,statistics`);
  }

  private displayErrorInDOM(error: any) {
    const errorMessage = error.error.error.message;
    const regex = /(<([^>]+)>)/gi;
    this.errorSpan = errorMessage.replace(regex, '');
  }

  getVideos(searchString: string) {
    return this.fetchSearchResults(searchString)
      .pipe(
        switchMap((response: SearchList) => {
          const searchResults = response.items.map((el: SearchListItem) => el.id.videoId);
          return this.fetchVideosById(searchResults);
        }),
        map((el: APIVideoInfo) => el.items),
        catchError((error) => {
          this.displayErrorInDOM(error);
          return of([]);
        })
      )
      .subscribe((data: VideoItem[]) => {
        return this.updateInfo(data);
      });
  }
}
