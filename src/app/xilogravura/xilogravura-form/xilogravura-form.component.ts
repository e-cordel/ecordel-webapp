import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'ec-xilogravura-form',
  templateUrl: './xilogravura-form.component.html',
  styleUrls: ['./xilogravura-form.component.css']
})
export class XilogravuraFormComponent implements OnInit {
  
  form: FormGroup;
  @Input() cordelId : number;
  private api = `${environment.API_URL}/cordels`;

  constructor(public formBuilder: FormBuilder, private http: HttpClient) {
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

    this.http.post(`${this.api}/${this.cordelId}/xilogravura`, formData).subscribe(
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
