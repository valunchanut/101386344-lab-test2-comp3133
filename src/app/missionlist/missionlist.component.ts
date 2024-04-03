import { Component, OnInit } from '@angular/core';
import { SpacexDataService } from '../network/spacex-data.service';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionListComponent implements OnInit {
  launches: any[] = [];

  constructor(private spacexService: SpacexDataService) { }

  ngOnInit(): void {
    this.spacexService.getLaunches().subscribe((data: any[]) => {
      this.launches = data;
    });
  }
}
