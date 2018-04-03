import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {TitleService} from "./title.service";
import { HeroesComponent } from './heroes/heroes.component'
import { HeroesService } from './heroes.service';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  constructor(private titleService: TitleService){

  }
  ngOnInit(): void {
    this.titleService.init();
  }
}