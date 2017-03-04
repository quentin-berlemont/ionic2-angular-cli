import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component
  ],
  imports: [
    IonicModule.forRoot(AppComponent)
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}],
  bootstrap: [IonicApp],
  entryComponents: [
    AppComponent,
    Page1Component,
    Page2Component
  ],
})
export class AppModule { }
