import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  formAddAdmin: FormGroup = this.createFormGroup;

  constructor(
    private ngFb: FormBuilder,
  ) { }

  ngOnInit() {
  }

  get createFormGroup() {
    return this.ngFb.group({
      username: [''],
      fname: [''],
      lname: [''],
      password: [''],
      password1: [''],
      rootAdminUser: [''],
      rootPassword: [''],
    })
  }

  onSubmit() {
    console.log(this.formAddAdmin.value);



  }

}
