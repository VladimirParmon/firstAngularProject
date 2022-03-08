import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes-and-views-counter',
  templateUrl: './likes-and-views-counter.component.html',
  styleUrls: ['./likes-and-views-counter.component.scss'],
})
export class LikesAndViewsCounterComponent implements OnInit {
  constructor() {}
  @Input() stats: any;
  ngOnInit(): void {}
}
