import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XilogravuraFormComponent } from './xilogravura-form/xilogravura-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    XilogravuraFormComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    XilogravuraFormComponent
  ]
})
export class XilogravuraModule { }
