import { Component } from '@angular/core';
import {Paginator} from './paginator';

@Component({
  selector: 'my-app',
  template: `
  <h1> {{title}} </h1>
  <p-paginator></p-paginator>
  `
})
export class AppComponent {
  title:string = 'PREMIER | Decision Support Analytics';
}
