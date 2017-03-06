import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { IonicModule, NavController, NavParams } from 'ionic-angular';

import { Page2Component } from './page2.component';
import { NavParamsMock } from '../../mocks';

describe('Page1Component', () => {
  let fixture: ComponentFixture<Page2Component>;
  let page2: Page2Component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Page2Component],
      imports: [
        IonicModule.forRoot(Page2Component)
      ],
      providers: [
        NavController,
        // NavParams
        { provide: NavParams, useClass: NavParamsMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page2Component);
    page2 = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
    page2 = null;
  });

  it('is created', () => {
    expect(page2).toBeTruthy();
  });
});
