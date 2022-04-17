import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-video-card',
  templateUrl: './custom-video-card.component.html',
  styleUrls: ['./custom-video-card.component.scss'],
})
export class CustomVideoCardComponent {
  @Input() card: any;
}
