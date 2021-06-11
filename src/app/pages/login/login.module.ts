import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [    
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: LoginComponent },
    ]),
  ]
})
export class LoginModule { }
