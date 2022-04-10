import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, debounceTime, distinctUntilChanged, Observable, Subject } from 'rxjs';
import { SortingStatus } from 'src/app/models/sortingLogic';
import { VideoItem } from 'src/app/models/youtubeResponse';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  sortingStatus$: Observable<SortingStatus>;
  sortingStatus$$ = new BehaviorSubject<SortingStatus>('default');

  sortingString$: Observable<string>;
  sortingString$$ = new BehaviorSubject<string>('');

  videosInfo$: Observable<VideoItem>;
  videosInfo$$ = new Subject<VideoItem>();

  detailedVideoInfo: any;
  errorSpan: string = '';

  constructor(private http: HttpClient) {
    this.sortingStatus$ = this.sortingStatus$$.asObservable();
    this.sortingString$ = this.sortingString$$.asObservable();
    this.videosInfo$ = this.videosInfo$$.asObservable().pipe(debounceTime(1000), distinctUntilChanged());
  }

  updateSortingStatus(status: SortingStatus) {
    this.sortingStatus$$.next(status);
  }
  updateSortingString(value: string) {
    this.sortingString$$.next(value);
  }

  updateInfo(info: VideoItem) {
    this.videosInfo$$.next(info);
  }

  getVideos(searchString: string) {
    //TODO: here goes http task
  }
}
