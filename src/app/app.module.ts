import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AppRouter2Module } from './app-router2.module';
import{ReactiveFormsModule,FormsModule ,FormControl,FormGroup,Validators} from '@angular/forms';

 @NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ContactUsComponent,
    SignupComponent,
    LoginComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRouter2Module 
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
