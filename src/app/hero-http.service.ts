import {Injectable} from '@angular/core';
import {HeroService} from "./hero-service";
import {Observable} from "rxjs/Observable";
import {Hero} from "./hero";

import {HttpClient} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {of} from 'rxjs/observable/of';

@Injectable()
export class HeroHttpService extends HeroService {

  constructor(private http: HttpClient) {
    super();
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap(heroes => console.log(`fetched heroes`)),
      catchError(this.handleError('getHeroes', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
