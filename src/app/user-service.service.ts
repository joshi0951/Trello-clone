import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInfo } from './UserInfo';
import { UserLoginParameter } from './UserLoginParameter';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  userLoginVerification(ulp: UserLoginParameter):Observable<boolean>{
    const url="http://localhost:8080/userLogin.api";
    return this.http.post<boolean>(url,ulp);
  }

  registerUser(us: UserInfo){​​​​​
    const url="http://localhost:8080/addUser.api";
    return this.http.post(url,us);
  }​​​​​​​​​​
}
