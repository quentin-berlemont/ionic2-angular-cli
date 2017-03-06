import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { IonicModule } from 'ionic-angular';

import { Page1Component } from './page1.component';

describe('Page1Component', () => {
  let fixture: ComponentFixture<Page1Component>;
  let page1: Page1Component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Page1Component],
      imports: [
        IonicModule.forRoot(Page1Component)
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1Component);
    page1 = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
    page1 = null;
  });

  it('is created', () => {
    expect(page1).toBeTruthy();
  });
});
