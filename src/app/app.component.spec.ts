import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { IonicModule } from 'ionic-angular';

import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
          IonicModule.forRoot(AppComponent)
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  });

  afterEach(() => {
    fixture.destroy();
    app = null;
  });

  it('is created', () => {
    expect(app).toBeTruthy();
  });

  it('root page should be Page One by default', () => {
      expect(app['rootPage']).toBe(Page1Component);
  });

  it('displays 2 pages in the menu', () => {
      expect(app['pages']).toEqual([
        { title: 'Page One', component: Page1Component },
        { title: 'Page Two', component: Page2Component }
      ]);
  });
});
