/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { NgCCTVModule }  from 'ng-cctv';

@Component({
  selector: 'app',
  template: `<ng-cctv></ng-cctv>`
})
class AppComponent {}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, NgCCTVModule ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
