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

  constructor(private fb: FormBuilder,
    private dataService: AppService,
    private router: Router) {
    this.formlogin = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(1)]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.formlogin.value);

    this.dataService.userlogin(this.formlogin.value.username, this.formlogin.value.password).subscribe(data => {
      const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/product-management';
      this.router.navigate([redirect]);
    }, error => {
      alert("User name or password is incorrect")
    });
  }

  get username() { return this.formlogin.get('username'); }
  get password() { return this.formlogin.get('password'); }

  ngOnInit(): void {
  }


}

