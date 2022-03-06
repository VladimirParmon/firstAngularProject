import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
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
  }
  updateSorting(value: string) {
    this.sortingStatusChange.next(value);
  }
  updateString(value: string) {
    this.sortingStringChange.next(value);
  }
}
