import { Component, OnInit, Input } from '@angular/core';
import { Cordel } from '../cordel';
import { CordelSummary } from '../cordel-summary';

@Component({
  selector: 'cordel-card',
  templateUrl: './cordel-card.component.html',
  styleUrls: ['./cordel-card.component.css']
})
export class CordelCardComponent implements OnInit {

  @Input() cordel : CordelSummary;

  constructor() { }

  ngOnInit() : void{
  }

}
