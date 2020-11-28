import { Component, OnInit } from '@angular/core';

import { Cordel } from '../cordel';
import { CordelSummary } from '../cordel-summary';
import { CordelService } from '../cordel.service';

@Component({
  selector: 'cordel-list',
  templateUrl: './cordel-list.component.html',
  styleUrls: ['./cordel-list.component.css']
})
export class CordelListComponent implements OnInit {

  private _cordels: Array<CordelSummary>;
  private errorMessage;

  constructor(private cordelService: CordelService) { }

  ngOnInit() {
    this.displayCordels();
  }

  get cordels() {
    return this._cordels;
  }

  onEnter(title: string) {
    console.log('searching by title', title);
    this.displayCordels(title);
  }

  private displayCordels(title?: string) {
    this.cordelService.getCordels(title).subscribe({
      next: data => this._cordels = data['content'],
      error: err => {
        this.errorMessage = err;
        console.error(err);
      }
    });
  }

}
