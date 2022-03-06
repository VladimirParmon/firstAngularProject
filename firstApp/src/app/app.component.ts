import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { VideoInfo } from 'src/assets/interfaces';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  infoList!: any;
  sorting = 'default';
  searchString = '';
  private _jsonURL = '../../assets/response.json';

  constructor(private http: HttpClient, private service: DataService) {
    this.getJSON().subscribe((data) => {
      this.infoList = data.items;
    });
  }
  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }
  ngOnInit() {
    this.service.sortingStatusChange.subscribe((info: any) => {
      this.sorting = info;
    });
    this.service.sortingStringChange.subscribe((info: any) => {
      this.searchString = info;
    });
  }
  // updateSearchingRequirements(value: any) {
  //   this.service.updateSorting(value);
  // }
}
