import { Component, OnInit } from '@angular/core';
import { Cordel } from '../cordel';
import { Observable } from 'rxjs';
import { CordelService } from '../cordel.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-cordel-form',
  templateUrl: './cordel-form.component.html',
  styleUrls: ['./cordel-form.component.css']
})
export class CordelFormComponent implements OnInit {

  private cordel = {} as Cordel;

  constructor(private cordelService : CordelService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.cordelService.addCordel(this.cordel).subscribe();
  }

}
