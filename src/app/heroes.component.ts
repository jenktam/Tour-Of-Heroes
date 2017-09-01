import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router'

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail-component.js';
import { HeroService } from './hero.service'

@Component({
  selector: "my-heroes",
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})

export class HeroesComponent implements OnInit{
  constructor(private router: Router, private heroService: HeroService) {

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

  gotoDetail(): void{
    this.router.navigate(['/detail', this.selectedHero.id])
  }
};

