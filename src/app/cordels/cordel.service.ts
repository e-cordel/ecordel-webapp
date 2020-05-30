import { Injectable } from '@angular/core';
import { Cordel } from './cordel';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CordelService{

    private ecordelApi = 'http://localhost:8080/cordels';
    
    constructor(private httpClient: HttpClient){}

    getCordels() {
        return this.httpClient.get(this.ecordelApi).pipe(
            tap(data => console.log(JSON.stringify(data))),
        );
    }
}