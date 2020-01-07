import { NgModule } from '@angular/core';
import{RouterModule,Routes}from '@angular/router'
import{IndexComponent}from './index/index.component';
import{LoginComponent}from './login/login.component';
import{SignupComponent}from './signup/signup.component';
import{ContactUsComponent}from './contact-us/contact-us.component';

const router:Routes=[
  {path:'index',component:IndexComponent},
  {path:'Login',component:LoginComponent},
  {path:'Signup',component:SignupComponent},
  {path:'Contactus',component:ContactUsComponent}
]


@NgModule({
  imports :[RouterModule.forRoot(router)],
  exports:[RouterModule]
 
})
export class AppRouter2Module { }
