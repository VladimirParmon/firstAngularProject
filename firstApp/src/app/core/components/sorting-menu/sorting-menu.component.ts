import { Component } from '@angular/core';
import { SortingStatus } from 'src/app/models/sortingLogic';
import { DataService } from 'src/app/youtube/services/data.service';

@Component({
  selector: 'app-sorting-menu',
  templateUrl: './sorting-menu.component.html',
  styleUrls: ['./sorting-menu.component.scss'],
})
export class SortingMenuComponent {
  constructor(private service: DataService) {}

  updateSearchingRequirements(status: SortingStatus): void {
    this.service.updateSortingStatus(status);
  }

  updateSearchingString(event: KeyboardEvent): void {
    const target = event.target as HTMLTextAreaElement;
    const searchStringValue = target.value;
    this.service.updateSortingString(searchStringValue);
  }
}
