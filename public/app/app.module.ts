import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { HttpModule }     from '@angular/http';

import {TopNavComponent} from './shared/topNavBar/topnav';
import {SidebarComponent} from './shared/sideNavBar/sidebar';
import {MainNavComponent} from './shared/mainNav/mainnav';
import { DataTableModule } from 'angular2-datatable';

import {MaterialService} from "./material.service";
import {SearchPipe} from "./search.pipe";
import {SortPipe} from "./order.pipe";
import {routingComponents} from './app-routing.module';
import {AppRoutingModule} from './app-routing.module';
import { FormsModule } from '@angular/forms';


import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, DataTableModule, FormsModule, RouterModule, HttpModule, AppRoutingModule ],
  declarations: [ AppComponent, TopNavComponent, SidebarComponent, MainNavComponent, routingComponents, SearchPipe, SortPipe ],
  providers: [MaterialService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
