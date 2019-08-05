import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarFormPage } from './bar-form.page';

describe('BarFormPage', () => {
  let component: BarFormPage;
  let fixture: ComponentFixture<BarFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
