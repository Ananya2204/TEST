import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsernameComponent } from './username/username.component';
import { UserDetailComponent } from './username/user-detail/user-detail.component';
import {HttpClientModule } from  '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UsernameComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
