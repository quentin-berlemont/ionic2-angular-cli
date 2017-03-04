import { Component, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';

import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Page1Component;
  pages: Array<{title: string, component: any}>;

  constructor() {
    this.pages = [
      { title: 'Page One', component: Page1Component },
      { title: 'Page Two', component: Page2Component }
    ];
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
