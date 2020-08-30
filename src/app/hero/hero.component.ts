import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'jsh-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  @Input() hero:Hero;
  constructor() { }
@Output() edit = new EventEmitter();
  ngOnInit() {
  };
editHero() {
  this.edit.emit(this.hero.id);
}
callHero() {
    alert(this.hero.name + 'a fost chemat');
}
;}
