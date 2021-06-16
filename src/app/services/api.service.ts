import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseApi = 'https://5fca6cf13c1c220016442675.mockapi.io/api/v1/';
  constructor(
    private http: HttpClient,
  ) { 
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getUsers() {
    return this.http.get<any>(`${this.baseApi}users`);
  }
}