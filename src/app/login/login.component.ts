import { Component, OnInit } from '@angular/core';
//import{FormGroup,FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
/*loginControl=new FormGroup({
username:new FormControl('', Validators.required, Validators.maxLength[12]),
password:new FormControl('', Validators.required,Validators.minLength[6])

});*/
}
