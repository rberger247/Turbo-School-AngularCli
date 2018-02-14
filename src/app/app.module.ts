import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Subject } from 'rxjs/Subject';
import { AppComponent }  from './app.component';
import { PaymentComponent } from './donor/payment/payment.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, PaymentComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
