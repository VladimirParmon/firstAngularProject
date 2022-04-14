import { Component, Input } from '@angular/core';
import { VideoItem } from 'src/app/models/youtubeResponse';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss'],
})
export class VideoCardComponent {
  @Input() video!: VideoItem;

  constructor(private service: DataService) {}

  pushForRouting(): void {
    this.service.detailedVideoInfo = this.video;
  }
}
