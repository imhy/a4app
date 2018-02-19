import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';

import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule, InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from "./in-memory-data.service";
import {HeroesComponent} from './heroes/heroes.component';
import {HeroHttpService} from "./hero-http.service";


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    //HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService), это работает для нов
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    BrowserModule
  ],
  providers: [HeroHttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
