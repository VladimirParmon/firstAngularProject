import { Component, Input } from '@angular/core';
import { CustomCard } from 'src/app/models/customCard';

@Component({
  selector: 'app-custom-video-card',
  templateUrl: './custom-video-card.component.html',
  styleUrls: ['./custom-video-card.component.scss'],
})
export class CustomVideoCardComponent {
  @Input() card!: CustomCard;
}
