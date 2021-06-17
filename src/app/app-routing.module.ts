import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './components';
import { PublicComponent, SecureComponent } from './layouts';

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
    redirectTo: '',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
