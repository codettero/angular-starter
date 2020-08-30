import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'jsh-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
selectedUniverse: string;
  //constructor() { }
editHandler(id) {
  alert(id);
}

  ngOnInit() {
this.selectedUniverse = 'all';
this.heros = this.heroService.heros;
  }

changeUniverse(newUniverse) {
  this.selectedUniverse = newUniverse;
}
heros: Hero[];
constructor(private heroService: HeroService) { }
}
