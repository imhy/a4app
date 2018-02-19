import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {HeroService} from "./hero-service";
import {Observable} from "rxjs/Observable";
import {Hero} from "./hero";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class HeroHttpService extends  HeroService{

  constructor(private http: Http) {
    super();
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get(this.heroesUrl)
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any){
    console.error(error);
    return Observable.throw(error);
  }
}
