import { Component } from '@angular/core';
import { SpacexDataService } from '../network/spacex-data.service';

@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionfilterComponent {
  selectedYear: string = '';
  launches: any[] = [];

  constructor(private spacexService: SpacexDataService) {}

  onYearChange(year: string): void {
    this.selectedYear = year;
    this.spacexService.getLaunchesByYear(year).subscribe((data: any[]) => {
      this.launches = data;
    });
  }
}
