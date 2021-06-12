import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Users } from '../users';

@Injectable({
  providedIn: 'root'
})

export class AppService {
  redirectUrl!: string;

  baseUrl: string = "http://localhost/market_doll/users";

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient: HttpClient) { }

  public userlogin(username: any, password: any) {
    alert(username)
    return this.httpClient.post<any>(this.baseUrl + '/post-user.php', { username, password })
      .pipe(map(Users => {
        this.setToken(Users[0].name);
        this.getLoggedInName.emit(true);
        return Users;
        
        
      }));
  }

  // public userregistration(name: any, email: any, pwd: any) {
  //   return this.httpClient.post<any>(this.baseUrl + '/register.php', { name, email, pwd })
  //     .pipe(map(Users => {
  //       return Users;
  //     }));
  // }

<<<<<<< HEAD
=======
  redirectUrl!: string;
  baseUrl: string = "http://localhost/market_doll/users/";
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient: HttpClient) { }

  public userlogin(username: any, password: any) {
    return this.httpClient.post<any>(this.baseUrl + 'post-user.php', { username, password })
      .pipe(map(Users => {
        this.setToken(Users[0].name);
        this.getLoggedInName.emit(true);
        return Users;
      }));
  }

  // public userregistration(name, email, pwd) {
  //   return this.httpClient.post<any>(this.baseUrl + '/register.php', { name, email, pwd })
  //     .pipe(map(Users => {
  //       return Users;
  //     }));
  // }

>>>>>>> f99c5462703e626749f07292701a6c63557b3d3b
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
<<<<<<< HEAD
}
=======
}
>>>>>>> f99c5462703e626749f07292701a6c63557b3d3b
