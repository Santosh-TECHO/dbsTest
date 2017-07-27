import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const appRout: Routes = [
  {
    path : 'home',
    component: HomeComponent
  },
  {
    path : '',
    component : LoginComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // NgbModule.forRoot(),
    RouterModule.forRoot(appRout)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
