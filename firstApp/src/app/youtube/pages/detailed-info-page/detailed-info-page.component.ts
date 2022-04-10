import { Component, OnInit } from '@angular/core';
import { VideoItem } from 'src/app/models/youtubeResponse';
import { DataService } from '../../services/data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detailed-info-page',
  templateUrl: './detailed-info-page.component.html',
  styleUrls: ['./detailed-info-page.component.scss'],
})
export class DetailedInfoPageComponent {
  videoInfo: VideoItem;

  constructor(private service: DataService, private location: Location) {
    this.videoInfo = this.service.detailedVideoInfo;
  }

  goBack(): void {
    this.location.back();
  }
}
