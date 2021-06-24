import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {

  formAddProduct: FormGroup = this.createFormGroup;
  message!: string;
  imagePath: any;
  imageUp: any;

  constructor(
    private ngFb: FormBuilder,
  ) { }

  ngOnInit() {
  }

  get createFormGroup() {
    return this.ngFb.group({
      pname: [''],
      detail: [''],
      price: [''],
    });
  }

  onSubmit() {
    console.log(this.formAddProduct.value);
    console.log(this.imageUp.value);


  }

  onFileChanged(event) {
    const files = event.target.files;
    if (files.length === 0)
      return;

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imageUp = reader.result;
    }
  }

}
