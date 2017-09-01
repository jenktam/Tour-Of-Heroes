import 'rxjs/add/operator/switchMap'; //use with route parameters Observable
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'hero-detail', //CSS selector name
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit{
  hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
    .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
    .subscribe(hero => this.hero = hero);
  }

  goBack(): void{
    this.location.back();
  }

  save(): void{
    this.heroService.update(this.hero)
    .then(() => this.goBack());
  }

};
