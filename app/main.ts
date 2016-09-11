import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { SideBarComponent } from './layouts/side-bar/side-bar.component';
import { CrimeInTheCityComponent } from './layouts/crime-in-the-city/crime-in-the-city.component';
import { OurLeadersComponent } from './layouts/our-leaders/our-leaders.component';
import { OurRiversComponent } from './layouts/our-rivers/our-rivers.component';

import { routing } from './app.routing';
@NgModule({
  bootstrap: [
    AppComponent
    ],

  declarations: [
    AppComponent, 
    SideBarComponent, 
    OurLeadersComponent, 
    CrimeInTheCityComponent, 
    OurRiversComponent
    ],
  imports: [
    BrowserModule, 
    CommonModule,    
    HttpModule,
    JsonpModule,
    routing
    ],
  providers: []
})
export class MainModule { }
