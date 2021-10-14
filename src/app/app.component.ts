import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  pokemons = [];
  list = [];

  constructor() {}

  ngOnInit() {
    this.list = [...Array(25).keys()];
  }

  addMon() {
    if (this.list.length > 0) {
      const randomNumber = Math.floor(Math.random() * this.list.length);
      this.pokemons.push(this.list[randomNumber]);
      this.list.splice(randomNumber, 1);
    }
  }

  clear() {
    this.pokemons = [];
    this.list = [...Array(25).keys()];
  }
}
