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

  ngOnInit(): void {}

  pushForRouting() {
    this.service.detailedVideoInfo = this.video;
  }
}
