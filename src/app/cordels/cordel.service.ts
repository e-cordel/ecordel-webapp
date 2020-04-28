import { Injectable } from '@angular/core';
import { Cordel } from './cordel';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CordelService{

    private ecordelApi = 'https://4f0243b2-72e9-477d-9dad-7c9c8c2785f2.mock.pstmn.io/cordels';
    
    constructor(private httpClient: HttpClient){}

    getCordels() : Observable<Cordel[]> {
        return this.httpClient.get<Cordel[]>(this.ecordelApi).pipe(
            tap(data => console.log(JSON.stringify(data)))
            
        );
    }

    /*
    [
            {
              xilogravura : 'https://img.elo7.com.br/product/original/1EF2F6C/xilogravura-carro-de-boi-xilogravura.jpg',
              text: 'loren ipson dolor',
              author: 'Mário Focking Santos',
              title: 'My first e-cordel',
              rating: 4.3
            },
            {
              xilogravura : 'https://img.elo7.com.br/product/original/1EF2F6C/xilogravura-carro-de-boi-xilogravura.jpg',
              text: 'loren ipson dolor',
              author: 'Mário Focking Santos',
              title: 'My first e-cordel',
              rating: 3
            }
          ];
    */
}