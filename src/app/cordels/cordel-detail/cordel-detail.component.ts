import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './cordel-detail.component.html',
  styleUrls: ['./cordel-detail.component.css']
})
export class CordelDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router) {
    
  }

  ngOnInit() {
     let id = +this.route.snapshot.paramMap.get('id');
  }

  onBack():void{
    this.router.navigate[''];
  }

}
