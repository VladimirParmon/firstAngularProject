import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { VideoItem } from 'src/app/models/youtubeResponse';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss'],
})
export class VideoCardComponent {
  @Input() video!: VideoItem;

  constructor(private router: Router) {}

  goToDetailedPage(): void {
    this.router.navigate(['/detailed-info', this.video.id]);
  }
}
