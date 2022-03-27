import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes-and-views-counter',
  templateUrl: './likes-and-views-counter.component.html',
  styleUrls: ['./likes-and-views-counter.component.scss'],
})
export class LikesAndViewsCounterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('like and views counter onInit');
  }
}
