import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss'],
})
export class SortingComponent implements OnInit {
  constructor(private service: DataService) {}
  sorting = 'default';

  ngOnInit() {
    this.service.sortingStatusChange.subscribe((info: any) => {
      this.sorting = info;
    });
  }
  updateSearchingRequirements(value: any) {
    this.service.updateSorting(value);
  }
  updateSearchingString(event: any) {
    const value = event.target.value;
    this.service.updateString(value);
  }
}
