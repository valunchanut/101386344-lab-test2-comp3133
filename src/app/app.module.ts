import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// Other component imports
import { MissionListComponent } from './missionlist/missionlist.component';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';
// Service and other necessary imports
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    MissionListComponent,
    MissiondetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
})
export class AppModule { }

bootstrapApplication(AppModule);
