import { Injectable } from '@angular/core';
import { Cordel } from './cordel';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';

import {Observable, of} from 'rxjs';
import {catchError, tap, map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CordelSummary } from './cordel-summary';

@Injectable({
    providedIn: 'root'
})
export class CordelService{

    private ecordelApi = `${environment.API_URL}/cordels`;
    
    constructor(private httpClient: HttpClient){}

    getCordels() {
        return this.httpClient.get(this.ecordelApi).pipe(
            tap(data => console.log(JSON.stringify(data))),
        );
    }

    getCordelById(id:number) : Observable<Cordel>{
        return this.httpClient.get<Cordel>(this.ecordelApi+"/"+id).pipe(
            tap(data => console.log(JSON.stringify(data))),
        );
    }

    addCordel (cordel: Cordel): Observable<string> {
        return this.httpClient.post(this.ecordelApi, cordel, { observe: 'response'} )
            .pipe(
                map( response => response.headers.get("Location"))
            );
    }

}