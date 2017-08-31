import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()

export class HeroService{
  //add promise to getHeroes to make response asynchronous. returns fast, zero-latency server by returning an immediately resolved Promise with mock heroes as the result
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      //Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000)
    })
  }
};