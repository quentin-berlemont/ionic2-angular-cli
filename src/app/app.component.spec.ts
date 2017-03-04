import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { IonicModule, Nav } from 'ionic-angular';

import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { NavMock } from '../mocks';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
          IonicModule.forRoot(AppComponent)
      ]
    })
    .overrideComponent(AppComponent, {
      add: [NavMock],
      remove: [Nav]
    })
    .compileComponents();
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

  it('initialises with a root page', () => {
    expect(app['rootPage']).toEqual(Page1Component);
  });

  it('initialises with two possible pages', () => {
    expect(app['pages'].length).toEqual(2);
  });

  it('opens a page', () => {
    spyOn(app['nav'], 'setRoot');
    app.openPage(app['pages'][1]);
    expect(app['nav'].setRoot).toHaveBeenCalledWith(Page2Component);
  });
});
