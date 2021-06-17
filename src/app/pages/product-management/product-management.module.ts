import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductManagementComponent } from './product-management.component';
import { RouterModule } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { AddArticlesComponent } from './add-articles/add-articles.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
  declarations: [
    ProductManagementComponent,
    AddProductsComponent,
    AddArticlesComponent,
    AdminComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductManagementComponent,
      },
      {
        path: 'จัดการสินค้า',
        component: AddProductsComponent,
      },
      {
        path: 'จัดการบทความ',
        component: AddArticlesComponent,
      },
      {
        path: 'จัดการผู้ดูแลระบบ',
        component: AdminComponent,
      },
    ]),
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
  ]
})
export class ProductManagementModule { }
