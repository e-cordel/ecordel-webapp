import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private _username = "";
  private _password = "";

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authenticationService.login(this._username, this._password).subscribe(
      () => {
        console.log("User is logged in");
        this.router.navigateByUrl('/');
      }
    );
  }

  public get username(): string {
    return this._username;
  }

  public set username(v: string) {
    this._username = v;
  }

  public get password(): string {
    return this._password;
  }

  public set password(v: string) {
    this._password = v;
  }


}
