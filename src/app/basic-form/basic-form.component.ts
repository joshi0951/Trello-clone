import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { UserInfo } from '../UserInfo';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {

  constructor(private service: UserServiceService, private router: Router) { }

  user: UserInfo= new UserInfo();

  ngOnInit(): void {
  }

  userRegister(){
    this.service.registerUser(this.user).subscribe(data=>{
      if(JSON.stringify(data)=="true"){
        alert("User Registered");
        this.router.navigate(["login"]);
      }else{
        alert("User Already Exists");
      };
    })
  }

}
