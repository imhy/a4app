import {Component, OnInit} from '@angular/core';
import {HeroHttpService} from "../hero-http.service";
import {Hero} from "../hero";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroHttpService) {
  }

  private heroes$: Observable<Hero[]>;

  getHeroes(): void {
    this.heroes$ = this.heroService.getHeroes();
  }

  ngOnInit() {
    this.getHeroes();
  }
}
