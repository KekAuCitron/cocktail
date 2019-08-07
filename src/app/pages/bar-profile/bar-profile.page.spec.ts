import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarProfilePage } from './bar-profile.page';

describe('BarProfilePage', () => {
  let component: BarProfilePage;
  let fixture: ComponentFixture<BarProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
