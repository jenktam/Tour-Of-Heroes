import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap'; //use with route parameters Observable

import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
  selector: 'hero-detail', //CSS selector name
  templateUrl: './hero-detail.component.html',
})

export class HeroDetailComponent implements OnInit{
  @Input() hero: Hero; //receives hero input property and binds to that property with its template

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

};
