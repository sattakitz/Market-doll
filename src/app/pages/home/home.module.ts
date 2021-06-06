import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HomeSub1Component } from './components/home-sub1/home-sub1.component';
import { HomeSub2Component } from './components/home-sub2/home-sub2.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeSub1Component,
    HomeSub2Component,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: HomeComponent,
        children: [
          { path: 'home1', component: HomeSub1Component },
          { path: 'home2', component: HomeSub2Component },
        ]
      },
      
    ]),
  ]
})
export class HomeModule { }
