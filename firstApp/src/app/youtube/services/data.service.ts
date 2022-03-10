import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  areVideosSeen: boolean = false;
  areVideosSeenChange: Subject<boolean> = new Subject<boolean>();

  sortingStatus: string = 'default';
  sortingStatusChange: Subject<string> = new Subject<string>();

  sortingString: string = '';
  sortingStringChange: Subject<string> = new Subject<string>();

  constructor() {
    this.sortingStatusChange.subscribe((value) => {
      this.sortingStatus = value;
    });
    this.sortingStringChange.subscribe((value) => {
      this.sortingString = value;
    });
    this.areVideosSeenChange.subscribe((value) => {
      this.areVideosSeen = value;
    });
  }

  updateSorting(value: string) {
    this.sortingStatusChange.next(value);
  }
  updateString(value: string) {
    this.sortingStringChange.next(value);
  }
  updateList(value: boolean) {
    this.areVideosSeenChange.next(value);
  }

  videoInfo: any;
}
