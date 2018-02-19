import {Injectable} from '@angular/core';
import {HeroService} from "./hero-service";
import {Observable} from "rxjs/Observable";
import {Hero} from "./hero";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class HeroHttpService extends HeroService {

  constructor(private http: HttpClient) {
    super();
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error(error);
    return Observable.throw(error);
  }
}
