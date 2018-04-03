import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Hero } from './hero';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class HeroesService {

  constructor(private http:HttpClient) { }

  getHeroes() : Observable<Array<Hero>>{
    return this.http.get<Array<Hero>>('http://localhost:8080/heroes');
}

}