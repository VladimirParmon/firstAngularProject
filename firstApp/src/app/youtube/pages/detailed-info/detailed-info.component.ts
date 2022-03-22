import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-detailed-info',
  templateUrl: './detailed-info.component.html',
  styleUrls: ['./detailed-info.component.scss'],
})
export class DetailedInfoComponent implements OnInit {
  videoInfo: any;

  constructor(private service: DataService) {}

  ngOnInit(): void {
    this.videoInfo = this.service.detailedVideoInfo;
  }
}
