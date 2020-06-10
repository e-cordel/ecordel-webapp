import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CordelsModule } from './cordels/cordels.module';
import { CallToActionComponent } from './template/call-to-action/call-to-action.component';

@NgModule({
  declarations: [
    AppComponent,
    CallToActionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CordelsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
