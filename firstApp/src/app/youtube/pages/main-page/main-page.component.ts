import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  isSeen = false;
  infoList: any;
  sorting = 'default';
  searchString = '';
  inDescOrder = false;
  inDescOrderDate = false;
  inDescOrderViews = false;
  huo: any;

  constructor(public service: DataService) {}

  ngOnInit() {
    this.service.sortingStatusChange.subscribe((info: any) => {
      if (info === this.sorting) this.flipOrder(info);
      this.sorting = info;
    });
    this.service.sortingStringChange.subscribe((info: any) => {
      this.searchString = info;
    });
    this.service.videosInfo.subscribe((info: any) => {
      this.infoList = info;
    });
  }

  flipOrder(info: string) {
    if (info === 'date') {
      this.inDescOrderDate = !this.inDescOrderDate;
      this.inDescOrder = this.inDescOrderDate;
    } else if (info === 'views') {
      this.inDescOrderViews = !this.inDescOrderViews;
      this.inDescOrder = this.inDescOrderViews;
    }
  }
}
