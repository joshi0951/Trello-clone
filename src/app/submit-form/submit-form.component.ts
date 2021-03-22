import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { UserLoginParameter } from '../UserLoginParameter';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.css']
})
export class SubmitFormComponent implements OnInit {

  constructor(private service : UserServiceService) { }

  user: UserLoginParameter= new UserLoginParameter;
  result: boolean;

  ngOnInit(): void {
  }

  userCheck(){
    this.service.userLoginVerification(this.user).subscribe(data=>{this.result=data;
      if(this.result==false){
        alert("Wrong credentials, try again.")
      }
      else{
        alert("Sign in sucessful")
      }
    })
  }

}
