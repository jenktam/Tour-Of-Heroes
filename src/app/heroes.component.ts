import { Component, OnInit } from "@angular/core";

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail-component.js';
import { HeroService } from './hero.service'

@Component({
  selector: "my-heroes",
  styleUrls: ['./app.component.css'],
  template: `
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
      <span class="badge">{{hero.id}}</span>{{hero.name}}
      </li>
      <p *ngIf="heroes.length < 5">There are more than 5 heros!</p>
    </ul>

    <hero-detail [hero]="selectedHero"></hero-detail>
  `,
  providers: [HeroService]
})

export class HeroesComponent implements OnInit{
  constructor(private heroService: HeroService) {

  }
  selectedHero: Hero;
  heroes: Hero[];

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  };

  getHeroes(): void {
    this.heroService.getHeroes()
    .then( heroes => this.heroes = heroes)
  }

  //latency test
  getHeroesSlowly(): void {
    this.heroService.getHeroesSlowly()
    .then( heroes => this.heroes = heroes)
  }

  ngOnInit(): void {
    this.getHeroes();
  }

};

