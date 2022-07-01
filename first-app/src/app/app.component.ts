import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

  template: `
    <app-title title="Boa noite"></app-title>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {

}
