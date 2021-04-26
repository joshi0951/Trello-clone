import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Board } from './model/board.model';
import { Login } from './model/login.model';
import { UserInfo } from './UserInfo';
import { UserDTO } from './UserLoginParameter';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  userLoginVerification(ulp: UserDTO):Observable<Login>{
    const url="http://localhost:8080/login/checkLogin";
    return this.http.post<Login>(url,ulp);
  }

  registerUser(us: UserInfo):Observable<Login>{​​​​​
    const url="http://localhost:8080/login/register";
    return this.http.post<Login>(url,us);
  }​​​​​​​​​​

  getBoardData():Observable<Board>{
    const url="http://localhost:8080/login/checkBoard.api";
    return this.http.get<Board>(url);
  }
}
