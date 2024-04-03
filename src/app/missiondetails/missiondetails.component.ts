import { Component, OnInit, Input } from '@angular/core';
import { SpacexDataService } from '../network/spacex-data.service';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {
  @Input() flightNumber!: string;
  missionDetails: any;

  constructor(private spacexDataService: SpacexDataService) { }

  ngOnInit(): void {
    this.getMissionDetails();
  }

  getMissionDetails(): void {
    this.spacexDataService.getLaunchByFlightNumber(this.flightNumber)
      .subscribe(data => this.missionDetails = data);
  }
}
