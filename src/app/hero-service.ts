import { Hero }       from './hero';
import { Observable } from 'rxjs/Observable';

export abstract class HeroService {
  heroesUrl = "api/heroes";
  abstract getHeroes() : Observable<Hero[]>;
}
