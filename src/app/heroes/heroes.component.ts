import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HeroesService } from '../heroes.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
title = 'app';
  heroes:Array<Hero>;
  selectedHero: Hero;
  constructor(private heroService:HeroesService){
    heroService.getHeroes().subscribe(
      (data)=>{
        this.heroes=(data);
      }
    )
  }
  ngOnInit() {
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  UpdateRecord(hero:Hero){
    alert('Update : ');
  }
}
