import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { UserServiceService } from '../user-service.service';
import { UserInfo } from '../UserInfo';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {

  constructor(private service: UserServiceService) { }

  user: UserInfo= new UserInfo();

  ngOnInit(): void {
  }

  userRegister(){
    this.service.registerUser(this.user).subscribe(data=>{
      if(JSON.stringify(data)=="true"){
        alert("User Registered");
      }else{
        alert("User Already Exists");
      };
    })
  }

}
