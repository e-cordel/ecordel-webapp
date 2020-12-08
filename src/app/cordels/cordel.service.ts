import { Injectable } from '@angular/core';
import { Cordel } from './cordel';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap, map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from '../auth/authentication.service';

@Injectable({
    providedIn: 'root'
})
export class CordelService{

        private ecordelApi = `${environment.API_URL}/cordels`;
    
    constructor(private httpClient: HttpClient, private authService : AuthenticationService){}

    getCordels(title?:string) {
        const options = title ? { params: new HttpParams().set('title', title) } : {};

        return this.httpClient.get(this.ecordelApi, options)
        .pipe(
            tap(data => console.log(JSON.stringify(data))),
        );
    }

    getCordelById(id:number) : Observable<Cordel>{
        return this.httpClient.get<Cordel>(this.ecordelApi+"/"+id).pipe(
            tap(data => console.log(JSON.stringify(data))),
        );
    }

    addCordel (cordel: Cordel): Observable<string> {

        let options : Object = {
            headers : new HttpHeaders ({ Authorization: `Bearer ${this.authService.getToken()}`}),
            observe : "response",
            responseType: 'json'
        }

        return this.httpClient.post(this.ecordelApi, cordel, options )
            .pipe(
                map( (response: HttpResponse<Object> ) => response.headers.get("Location"))
            );
    }

}