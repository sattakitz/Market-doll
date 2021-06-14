import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) {
    http.get(`http://localhost/market_doll/users/get-users.php`).subscribe(res => {
      console.log(res);
    });
  }

  ngOnInit(): void {
  }
}
