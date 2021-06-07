import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent, SecureComponent } from './layouts';
import { HtOrderComponent } from './pages/home/ht-order/ht-order.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    loadChildren: () => import('./pages').then(C => C.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./pages').then(C => C.LoginModule),
  },
  {
    path: 'product-management',
    component: SecureComponent,
    loadChildren: () => import('./pages').then(C => C.ProductManagementModule),
  },  
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
