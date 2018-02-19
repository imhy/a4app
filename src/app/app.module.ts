import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from "./in-memory-data.service";
import {HeroesComponent} from './heroes/heroes.component';
import {HeroHttpService} from "./hero-http.service";


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    BrowserModule
  ],
  providers: [HeroHttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
