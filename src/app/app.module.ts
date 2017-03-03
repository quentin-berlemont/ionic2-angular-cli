import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { AppComponent } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';

@NgModule({
  declarations: [
    AppComponent,
    Page1,
    Page2
  ],
  imports: [
    IonicModule.forRoot(AppComponent)
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}],
  bootstrap: [IonicApp],
  entryComponents: [
    AppComponent,
    Page1,
    Page2
  ],
})
export class AppModule { }
