import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HomeSub1Component } from './components/home-sub1/home-sub1.component';
import { HomeSub2Component } from './components/home-sub2/home-sub2.component';
import { HtOrderComponent } from './ht-order/ht-order.component';
import { ArticleComponent } from './article/article.component';
import { NoticeOfPaymentComponent } from './notice-of-payment/notice-of-payment.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';


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
      {
        path: 'วิธีการสั่งซื้อ',
        component: HtOrderComponent,
      },
      {
        path: 'วิธีการชำระเงิน',
        component: NoticeOfPaymentComponent,
      },
      {
        path: 'แจ้งชำระเงิน',
        component: PaymentMethodComponent,
      },
      {
        path: 'บทความ',
        component: ArticleComponent,
      },
    ]),
  ]
})
export class HomeModule { }
