import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { CustomCard } from 'src/app/models/customCard';
import { deleteCustomCard } from 'src/app/redux/actions/youtube.actions';

@Component({
  selector: 'app-custom-video-card',
  templateUrl: './custom-video-card.component.html',
  styleUrls: ['./custom-video-card.component.scss'],
})
export class CustomVideoCardComponent {
  @Input() card!: CustomCard;

  constructor(private store: Store) {}

  deleteCard() {
    this.store.dispatch(deleteCustomCard({ cardId: this.card.id }));
  }
}
