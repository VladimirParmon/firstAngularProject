import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CustomCard } from 'src/app/models/customCard';
import { SortingStatus } from 'src/app/models/sortingLogic';
import { VideoItem } from 'src/app/models/youtubeResponse';
import {
  selectCustomCardsInfo,
  selectErrorMessageInfo,
  selectYoutubeAPIData,
} from 'src/app/redux/selectors/youtube.selectors';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  infoList$: Observable<VideoItem[]>;
  sorting: SortingStatus = 'default';
  searchString: string = '';
  isInDescOrder_Date: boolean = false;
  isInDescOrder_Views: boolean = false;
  errorSpan$: Observable<string>;
  customCards$: Observable<CustomCard[]>;

  constructor(public service: DataService, private store: Store) {
    this.infoList$ = this.store.select(selectYoutubeAPIData);
    this.errorSpan$ = this.store.select(selectErrorMessageInfo);
    this.customCards$ = this.store.select(selectCustomCardsInfo);
  }

  ngOnInit(): void {
    this.service.sortingStatus$$.subscribe((status: SortingStatus) => {
      if (status === this.sorting) this.flipOrder(status);
      this.sorting = status;
    });
    this.service.sortingString$$.subscribe((string: string) => {
      this.searchString = string;
    });
  }

  flipOrder(status: SortingStatus): void {
    if (status === 'date') {
      this.isInDescOrder_Date = !this.isInDescOrder_Date;
    } else if (status === 'views') {
      this.isInDescOrder_Views = !this.isInDescOrder_Views;
    }
  }
}
