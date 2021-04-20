import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { UserDTO } from '../UserLoginParameter';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.css']
})
export class SubmitFormComponent implements OnInit {

  constructor(private service : UserServiceService, private router: Router) { }

  user: UserDTO= new UserDTO;
  result: boolean;

  ngOnInit(): void {
  }

  userCheck(){
    this.service.userLoginVerification(this.user).subscribe(data=>{
      this.result=data;
      {
      if(!this.result){
        alert("Wrong credentials, try again.")
      }
      else{
        alert("Sign in sucessful");
        this.router.navigate(["board"]);
      }
    }})
  }

}
