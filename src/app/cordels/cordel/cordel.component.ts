import { Component, OnInit, Input } from '@angular/core';
import { Cordel } from '../cordel';
import { CordelSummary } from '../cordel-summary';

@Component({
  selector: 'e-cordel',
  templateUrl: './cordel.component.html',
  styleUrls: ['./cordel.component.css']
})
export class CordelComponent implements OnInit {

  @Input() cordel : CordelSummary;

  constructor() { }

  ngOnInit() : void{
  }

}
