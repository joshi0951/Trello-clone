import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../model/login.model';
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
  register: Login = new Login;

  ngOnInit(): void {
  }

  userRegister(){
    this.service.registerUser(this.user).subscribe(data=>{
      this.register =data;
      if(this.register!=null){
        alert("User Registered");
        this.router.navigate(["login"]);
      // }else{
      //   alert("User Already Exists");
      // };
    }
  },
  error => {
    alert("User Already Exists")
});

}

}
