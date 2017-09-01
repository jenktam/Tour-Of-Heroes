import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero } from './hero';

@Injectable()

export class HeroSearchService {
  constructor(private http: Http) {}

  //call Observable instead of toPromise()
  search(term: string): Observable<Hero[]> {
    return this.http
    .get(`api/heroes/?name=${term}`) //send query term to server's web api
    .map(response => response.json().data as Hero[]);
  }
}
