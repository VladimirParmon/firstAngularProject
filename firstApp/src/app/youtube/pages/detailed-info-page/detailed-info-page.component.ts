import { Component, OnInit } from '@angular/core';
import { VideoItem } from 'src/app/models/youtubeResponse';
import { DataService } from '../../services/data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detailed-info-page',
  templateUrl: './detailed-info-page.component.html',
  styleUrls: ['./detailed-info-page.component.scss'],
})
export class DetailedInfoPageComponent implements OnInit {
  videoInfo!: VideoItem;
  imageUrl: string = this.videoInfo.snippet.thumbnails['maxres'].url
    ? this.videoInfo.snippet.thumbnails['maxres'].url
    : this.videoInfo.snippet.thumbnails['standard'].url;

  constructor(private service: DataService, private location: Location) {
    // this.videoInfo = this.service.detailedVideoInfo;
  }

  ngOnInit(): void {
    this.videoInfo = this.service.detailedVideoInfo;
  }

  goBack(): void {
    this.location.back();
  }
}
