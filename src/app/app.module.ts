import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CordelsModule } from './cordels/cordels.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CordelsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
