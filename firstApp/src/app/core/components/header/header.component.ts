import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, query } from '@angular/animations';
import { DataService } from 'src/app/youtube/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('headerOpenClose', [
      state(
        'open',
        style({
          height: '130px',
        })
      ),
      state(
        'closed',
        style({
          height: '80px',
        })
      ),
      transition('open <=> closed', [animate('0.4s')]),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
  ngOnInit(): void {}

  constructor(private service: DataService) {}

  toggleList() {
    const status = !this.service.areVideosSeen;
    this.service.updateList(status);
  }
}
