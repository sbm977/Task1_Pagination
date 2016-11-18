import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// import { routing } from './app.routes';

import { AppComponent }  from './app.component';
import { Paginator } from './paginator';
import {DataTableModule} from 'primeng/primeng';

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule,DataTableModule],
  declarations: [ AppComponent, Paginator],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
