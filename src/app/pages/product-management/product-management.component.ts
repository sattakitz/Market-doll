import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AppService } from 'src/app/services/app.service';
import { Users } from 'src/app/users';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss']
})
export class ProductManagementComponent implements OnInit {

  products = 0;
  articles = 0;
  users = 0;

  constructor(
    private http: HttpClient,
    public svApi: ApiService,
  ) {
    this.getUsers();
  }

  ngOnInit(): void {
  }

  getUsers() {
    this.svApi.getUsers().subscribe(res => {
      console.log("🚀 ~ this.svApi.getUsers ~ res", res);
    });
  }


}
