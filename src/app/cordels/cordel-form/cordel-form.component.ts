import { Component, OnInit } from '@angular/core';
import { Cordel } from '../cordel';
import { Observable } from 'rxjs';
import { CordelService } from '../cordel.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cordel-form',
  templateUrl: './cordel-form.component.html',
  styleUrls: ['./cordel-form.component.css']
})
export class CordelFormComponent implements OnInit {
  
  private _cordelId : string;
  
  private _cordel = {
    author:{},
  } as Cordel;

  constructor(private cordelService : CordelService, private router : Router) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("submiting ", this._cordel);
    
    this.cordelService.addCordel(this._cordel).subscribe( location => {
      alert('Cordel salvo com sucesso!');
      this._cordelId = location.split("/").pop();
    });
    
  }

  get cordel(){
    return this._cordel;
  }

  get cordelId(){
    return this._cordelId;
  }

}
