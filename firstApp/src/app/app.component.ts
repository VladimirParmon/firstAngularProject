import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { VideoInfo } from 'src/assets/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  infoList!: any;
  currentStuff = 'someString';
  private _jsonURL = '../../assets/response.json';
  constructor(private http: HttpClient) {
    this.getJSON().subscribe((data) => {
      this.infoList = data.items;
      //console.log(this.stuff[1].snippet.thumbnails.standard);
    });
  }
  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }
}
