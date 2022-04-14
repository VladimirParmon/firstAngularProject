import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { SortingStatus } from 'src/app/models/sortingLogic';
import { APIVideoInfo, VideoItem } from 'src/app/models/youtubeResponse';
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

  constructor(public service: DataService) {
    this.infoList$ = this.service.videosInfo$;
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
