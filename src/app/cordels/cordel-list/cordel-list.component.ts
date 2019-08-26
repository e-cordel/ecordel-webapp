import { Component, OnInit } from '@angular/core';

import { Cordel } from '../cordel';

@Component({
  selector: 'e-cordels',
  templateUrl: './cordel-list.component.html',
  styleUrls: ['./cordel-list.component.css']
})
export class CordelListComponent implements OnInit {

  cordels : Array<Cordel>= [
    {
      xilogravura : 'https://img.elo7.com.br/product/original/1EF2F6C/xilogravura-carro-de-boi-xilogravura.jpg',
      text: 'loren ipson dolor',
      author: 'Mário Focking Santos',
      title: 'My first e-cordel'
    },
    {
      xilogravura : 'https://img.elo7.com.br/product/original/1EF2F6C/xilogravura-carro-de-boi-xilogravura.jpg',
      text: 'loren ipson dolor',
      author: 'Mário Focking Santos',
      title: 'My first e-cordel'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
