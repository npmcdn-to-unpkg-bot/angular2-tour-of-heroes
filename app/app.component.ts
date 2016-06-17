// primary angular library module from which we get most of what we need
import { Component } from '@angular/core';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

// The import statement tells the system it can get an AppComponent from a module named app.component located in a neighboring file
// The module name (AKA module id) is often the same as the filename without its extension
import { DashboardComponent }  from './dashboard.component';
import { HeroesComponent }     from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService }         from './hero.service';

@Component({
  selector: 'my-app',

  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['Heroes']">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    HeroService,
  ]
})
@RouteConfig([
  { path: '/dashboard',  name: 'Dashboard',  component: DashboardComponent, useAsDefault: true },
  { path: '/detail/:id', name: 'HeroDetail', component: HeroDetailComponent },
  { path: '/heroes',     name: 'Heroes',     component: HeroesComponent }
])

// export tells TypeScript that this is a module whose AppComponent class is public and accessible to other modules of the application
export class AppComponent {
  title = 'Tour of Heroes';
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/