import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.col-2',
  //templateUrl: 'side-bar.component.html',
  template: `
  <aside class="side-bar">
  <a href="" class="site-logo"><img src="site-logo.png" alt="My India Logo"/></a>
  <nav class="main-nav">
    <ul>
      <li><a routerLink="/our-leaders">Our Leaders</a></li>
      <li><a routerLink="/crime-in-the-city">Crime in Cities</a></li>
      <li><a routerLink="">Accidents in Cities</a></li>
      <li><a routerLink="our-rivers">Our Rivers</a></li>
    </ul>
  </nav>
</aside>

  `,
  styleUrls: ['side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
