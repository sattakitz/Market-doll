import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from '../users';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AppService {
  redirectUrl!: string;
  baseUrl: string = "https://5fca6cf13c1c220016442675.mockapi.io/api/v1/";

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();


  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    header: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  LoginUser(model: any) {
    return this.httpClient.post<any>(`${this.baseUrl}users`, model);
  }

  // public userlogin(username: any, password: any) {
  //   alert(username)
  //   return this.httpClient.post<any>(this.baseUrl + '/post-user.php', { username, password })
  //     .pipe(map(Users => {
  //       this.setToken(Users[0].name);
  //       this.getLoggedInName.emit(true);
  //       return Users;
  //     }));
  // }

  // public userregistration(name: any, email: any, pwd: any) {
  //   return this.httpClient.post<any>(this.baseUrl + '/register.php', { name, email, pwd })
  //     .pipe(map(Users => {
  //       return Users;
  //     }));
  // }

  //token
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  deleteToken() {
    localStorage.removeItem('token');
  }
  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true
    }
    return false;
  }
}
