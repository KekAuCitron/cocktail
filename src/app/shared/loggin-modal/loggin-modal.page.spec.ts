import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogginModalPage } from './loggin-modal.page';

describe('LogginModalPage', () => {
  let component: LogginModalPage;
  let fixture: ComponentFixture<LogginModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogginModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogginModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
