import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductManagementComponent } from './product-management.component';
import { RouterModule } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { AddArticlesComponent } from './add-articles/add-articles.component';
import { AdminComponent } from './admin/admin.component';



@NgModule({
  declarations: [
    ProductManagementComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductManagementComponent,
      },
      {
        path: 'addproduct',
        component: AddProductsComponent,
      },
      {
        path: 'addarticle',
        component: AddArticlesComponent,
      },
      {
        path: 'manageadmin',
        component: AdminComponent,
      },
    ]),
  ]
})
export class ProductManagementModule { }
