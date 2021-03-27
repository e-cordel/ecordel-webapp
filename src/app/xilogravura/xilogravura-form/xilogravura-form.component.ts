import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { AuthenticationService } from 'src/app/auth/authentication.service';

@Component({
  selector: 'ec-xilogravura-form',
  templateUrl: './xilogravura-form.component.html',
  styleUrls: ['./xilogravura-form.component.css']
})
export class XilogravuraFormComponent implements OnInit {
  
  form: FormGroup;
  @Input() cordelId : number;
  private api = `${environment.API_URL}/cordels`;

  constructor(public formBuilder: FormBuilder, private http: HttpClient, private authService: AuthenticationService) {
    this.form = this.formBuilder.group({
      description: [""],
      file: [null]
    });
  }

  ngOnInit() {}

  onSubmit() {
    let formData: any = new FormData();

    formData.append("description", this.form.get('description').value);
    formData.append("file", this.form.get('file').value);
    
    // todo duplicated code, move to a utils/helper class
    let options : Object = {
      headers : new HttpHeaders ( this.authService.getAuthorizationHeader() ),
      observe : "response",
      responseType: 'json'
    }

    this.http.put(`${this.api}/${this.cordelId}/xilogravura`, formData, options)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

  upload(event) {
    const image = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      file: image
    });
    this.form.get('file').updateValueAndValidity();
  }

}
