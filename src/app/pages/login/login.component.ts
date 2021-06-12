import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  loading = false;

  constructor(private fb: FormBuilder,
    private dataService: AppService,
    private router: Router) {
    this.formlogin = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(1)]],
      password: ['', Validators.required]
    });
  }
  ngOnInit(): void {
  }


  onSubmit() {
    console.log(this.formlogin.value);

    if (this.formlogin.invalid) {
      alert("Please fill out Username or Password")
      return;
    }
    this.loading = true;
    this.dataService.LoginUser(this.formlogin.value).subscribe(data => {
      if (data != null) {
        const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/product-management';
        alert("Login Success!")
        this.router.navigate([redirect]);
        alert("Welcome to Products Management")

      } else {
        alert("Login fail");
        this.loading = false;
      }

    }, error => {
      alert("ERROR FORM SERVER ")
    });
  }

  get username() { return this.formlogin.get('username'); }
  get password() { return this.formlogin.get('password'); }




}

