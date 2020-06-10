import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CordelService } from '../cordel.service';
import { Cordel } from '../cordel';

@Component({
  templateUrl: './cordel-detail.component.html',
  styleUrls: ['./cordel-detail.component.css']
})
export class CordelDetailComponent implements OnInit {

  private _cordel:Cordel;

  constructor(private route: ActivatedRoute, 
    private location: Location,
    private cordelService : CordelService) { }

  ngOnInit() {
     let id = +this.route.snapshot.paramMap.get('id');
     this.cordelService.getCordelById(id).subscribe({
      next: data => this._cordel = data,
      error: err => {
        console.error(err);
      }
    });
  }

  get cordel(){
    return this._cordel;
  }

  onBack(){
    this.location.back();
  }

}
