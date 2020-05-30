import { Component, OnInit } from '@angular/core';

import { Cordel } from '../cordel';
import { CordelService } from '../cordel.service';

@Component({
  selector: 'e-cordels',
  templateUrl: './cordel-list.component.html',
  styleUrls: ['./cordel-list.component.css']
})
export class CordelListComponent implements OnInit {

  private _cordels:Array<Cordel>;
  private errorMessage;

  constructor(private cordelService : CordelService) { }

  ngOnInit() {
    this.cordelService.getCordels().subscribe({
      next: data => this._cordels = data['content'],
      error: err => {
        this.errorMessage = err;
        console.error(err);
      }
    });
  }

  get cordels(){
    return this._cordels;
  }

}
