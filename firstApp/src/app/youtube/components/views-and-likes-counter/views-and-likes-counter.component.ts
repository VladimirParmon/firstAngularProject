import { Component, Input, OnInit } from '@angular/core';
import { PartOfViewsAndLikesCounter } from 'src/app/models/other';
import { Statistics } from 'src/app/models/youtubeResponse';

@Component({
  selector: 'app-views-and-likes-counter',
  templateUrl: './views-and-likes-counter.component.html',
  styleUrls: ['./views-and-likes-counter.component.scss'],
})
export class ViewsAndLikesCounterComponent implements OnInit {
  @Input() stats!: Statistics;
  partsOfTheCounter: PartOfViewsAndLikesCounter[] = [];

  constructor() {}

  ngOnInit(): void {
    this.partsOfTheCounter = [
      {
        imgName: 'viewed',
        data: this.stats.viewCount,
      },
      {
        imgName: 'liked',
        data: this.stats.likeCount,
      },
      {
        imgName: 'dislike',
        data: this.stats.dislikeCount,
      },
      {
        imgName: 'comments',
        data: this.stats.commentCount,
      },
    ];
  }
}
