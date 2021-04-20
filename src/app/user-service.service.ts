import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Board } from './model/board.model';
import { UserInfo } from './UserInfo';
import { UserDTO } from './UserLoginParameter';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  userLoginVerification(ulp: UserDTO):Observable<boolean>{
    const url="http://localhost:8080/loginCheck";
    return this.http.post<boolean>(url,ulp);
  }

  registerUser(us: UserInfo){​​​​​
    const url="http://localhost:8080/register";
    return this.http.post(url,us);
  }​​​​​​​​​​

  getBoardData():Observable<Board>{
    const url="http://localhost:8080/login/checkBoard.api";
    return this.http.get<Board>(url);
  }
}
