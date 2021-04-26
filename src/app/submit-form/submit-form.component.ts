import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../model/login.model';
import { UserServiceService } from '../user-service.service';
import { UserDTO } from '../UserLoginParameter';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.css']
})
export class SubmitFormComponent implements OnInit {
  @ViewChild('email') email; // accessing the reference element
  @ViewChild('password') password; // accessing the reference element


  constructor(private service : UserServiceService, private router: Router) { }

  user: UserDTO= new UserDTO;
  result: string;
  login: Login = new Login;


  ngOnInit(): void {
  }

  userCheck(){
    this.service.userLoginVerification(this.user).subscribe(data=>{
      this.login=data;
      localStorage.setItem("login", JSON.stringify(this.login));
      console.log (localStorage.getItem("login"))
      
      if(this.login!==null){
        alert("Sign in sucessful");
        this.router.navigate(["board"]);

      }
      // else if (this.login){
      //   alert("Wrong credentials, try again.")

      // }
    },
    error => {
        alert("Wrong credentials, try again.")
    });
  }

  clear(){
    this.email = '';
    this.password = '';
   }
 

}
