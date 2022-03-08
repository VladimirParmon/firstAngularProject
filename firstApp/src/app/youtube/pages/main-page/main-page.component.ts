import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { VideoInfo } from 'src/assets/interfaces';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  isSeen: boolean;
  infoList!: any;
  sorting = 'default';
  searchString = '';
  inDescOrder = false;
  inDescOrderDate = false;
  inDescOrderViews = false;
  private _jsonURL = '../../assets/response.json';

  constructor(private http: HttpClient, private service: DataService) {
    this.getJSON().subscribe((data) => {
      this.infoList = data.items;
    });
    this.isSeen = this.service.areVideosSeen;
  }
  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }
  ngOnInit() {
    this.service.sortingStatusChange.subscribe((info: any) => {
      if (info === this.sorting) this.flipOrder(info);
      this.sorting = info;
    });
    this.service.sortingStringChange.subscribe((info: any) => {
      this.searchString = info;
    });
    this.service.areVideosSeenChange.subscribe((info: any) => {
      this.isSeen = info;
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
