import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CordelService } from '../cordel.service';
import { Cordel } from '../cordel';

@Component({
  templateUrl: './cordel-detail.component.html',
  styleUrls: ['./cordel-detail.component.css']
})
export class CordelDetailComponent implements OnInit {

  private _cordel:Cordel;

  constructor(private route: ActivatedRoute, 
    private router: Router,
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

  onBack():void{
    this.router.navigate[''];
  }

}
