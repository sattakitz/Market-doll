import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formlogin!: FormGroup;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private svService: AppService,
    private router: Router
  ) {
    http.get(`http://localhost/market_doll/users/get-users.php`).subscribe(res => {
      console.log(res);
    });
    this.formlogin = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(1)]],
      password: ['', Validators.required]
    });
  }

  onSummit() {



    this.svService.userlogin(this.formlogin.value.username, this.formlogin.value.password)
      .pipe(first())
      .subscribe(
        data => {
          const redirect = this.svService.redirectUrl ? this.svService.redirectUrl : '';
          this.router.navigate([redirect]);
        },
        error => {
          alert("User name or password is incorrect")
        });

    console.log(this.formlogin.value.username);
    console.log(this.formlogin.value.password);

  }


  ngOnInit(): void {
  }


}

