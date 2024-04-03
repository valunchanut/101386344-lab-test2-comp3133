import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Launch } from '../models/launch';

@Injectable({
  providedIn: 'root'
})
export class SpacexDataService {
  private apiUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) { }

  getLaunches(): Observable<Launch[]> {
    return this.http.get<Launch[]>(this.apiUrl);
  }

  getLaunchesByYear(year: string): Observable<Launch[]> {
    return this.http.get<Launch[]>(`${this.apiUrl}?launch_year=${year}`);
  }

  getLaunchByFlightNumber(flightNumber: string): Observable<Launch> {
    return this.http.get<Launch>(`${this.apiUrl}/${flightNumber}`);
  }
}
