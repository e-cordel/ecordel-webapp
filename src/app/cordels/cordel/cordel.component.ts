import { Component, OnInit, Input } from '@angular/core';
import { Cordel } from '../cordel';

@Component({
  selector: 'e-cordel',
  templateUrl: './cordel.component.html',
  styleUrls: ['./cordel.component.css']
})
export class CordelComponent implements OnInit {

  @Input() cordel : Cordel;

  constructor() { }

  ngOnInit() {
  }

}
