import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SideBarComponent } from './layouts/side-bar/side-bar.component';
//import { CrimeInTheCityComponent } from './layouts/crime-in-the-city/crime-in-the-city.component';
import { OurLeadersComponent } from './layouts/our-leaders/our-leaders.component';
//import { routing } from './app.routing';
@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent,SideBarComponent,OurLeadersComponent],
  imports: [BrowserModule],
  providers: []
})
export class MainModule {}
