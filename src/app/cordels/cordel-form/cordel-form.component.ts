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

  private cordel = {author:{}} as Cordel;

  constructor(private cordelService : CordelService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("submiting ", this.cordel);
    this.cordelService.addCordel(this.cordel).subscribe( localtion => alert('Cordel salvo com sucesso!') );
  }

}