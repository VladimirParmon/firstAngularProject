import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss'],
})
export class VideoCardComponent implements OnInit {
  @Input() video: any;
  constructor(private service: DataService) {}
  ngOnInit(): void {
    this.checkDate();
  }

  checkDate() {
    let result = 'red';
    const date = new Date();
    const publishDate = new Date(this.video.snippet.publishedAt);
    const oneDayMS = 1000 * 60 * 60 * 24;
    const dateMS = date.getTime();
    const publishDateMS = publishDate.getTime();
    const diff = dateMS - publishDateMS;

    const daysPassed = diff / oneDayMS;
    const monthsPassed = (date.getFullYear() - publishDate.getFullYear()) * 12;

    if (daysPassed < 7) {
      result = 'blue';
    } else if (monthsPassed < 1) {
      result = 'green';
    }

    return result;
  }

  pushForRouting() {
    this.service.videoInfo = this.video;
  }
}
