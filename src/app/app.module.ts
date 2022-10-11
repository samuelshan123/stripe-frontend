import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { SuccessComponent } from './success/success.component';
import { FailureComponent } from './failure/failure.component';
import { RouterModule } from '@angular/router';
import { NgxStripeComponent } from './ngx-stripe/ngx-stripe.component';
import {HttpClientModule}  from "@angular/common/http"
import { NgxStripeModule } from 'ngx-stripe';
 
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SuccessComponent,
    FailureComponent,
    NgxStripeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgxStripeModule.forRoot('pk_test_51LnPZRA2J9cyQhkSzLkhtLAE0w3X9eQ2UpeGywtLvxXnAtJhp5fiyIufLnCgJJ56ZLBq6u0niyL85w0c0wffoGzn004JNBUwqj'),
    RouterModule.forRoot([
      {
        path: 'stripe',
        component: NgxStripeComponent
      },
      {
        path: 'success',
        component: SuccessComponent
      },
      {
        path: 'success/:session_id',
        component: SuccessComponent
      },
      {
        path: 'failure',
        component: FailureComponent
      },
      {
        path: '**',
        component: NgxStripeComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
