import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { tap, shareReplay } from 'rxjs/operators';

import { AuthResult } from './auth-result';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private loginUrl = `${environment.API_URL}/auth`;

  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string) {
    return this.httpClient.post(this.loginUrl, { username, password })
      .pipe(
        tap(response => this.setSession),
        shareReplay(1)
      );
  }

  private setSession(authResult: AuthResult) {
    // const expiresAt = moment().add(authResult.expiresIn, 'second');
    console.log(">>>", authResult);
    localStorage.setItem('token', authResult.token);
    // localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    localStorage.removeItem("token");
  }

}
