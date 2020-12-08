import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { tap, shareReplay } from 'rxjs/operators';

import { AuthResult } from './auth-result';

import * as moment from 'moment';

import decode from 'jwt-decode';
import { TokenPayload } from './token-payload';
import { Router } from '@angular/router';

const TOKEN = "token";
const EXPIRES_AT = "expires_at";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  private loginUrl = `${environment.API_URL}/auth`;

  constructor(private httpClient: HttpClient, private router: Router) { }

  login(username: string, password: string) {
    return this.httpClient.post(this.loginUrl, { username, password })
      .pipe(
        tap(this.setSession),
        tap(response => console.log(response)),
        shareReplay(1)
      );
  }

  private setSession(authResult: AuthResult) {
    localStorage.setItem(TOKEN, authResult.token);
    localStorage.setItem(EXPIRES_AT, JSON.stringify(authResult.expiresAt.valueOf()));
  }

  logout() {
    this.cleanLocalStorage();
    this.router.navigateByUrl("/");
  }

  private cleanLocalStorage() {
    localStorage.removeItem(TOKEN);
    localStorage.removeItem(EXPIRES_AT);
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem(EXPIRES_AT);
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  getRoles() : string[] {
    const payload : TokenPayload = decode ( localStorage.getItem(TOKEN));
    console.log(payload);
    return payload.roles;
  }

}
