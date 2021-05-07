import { Component, OnInit } from '@angular/core';
import {User} from'../models/user.model'
@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  userObj:User={username:"",dob:"",email:"@gmail.com"}

adduserData(){
  console.log(this.userObj);
}
}
