/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MoreArrowDownComponent } from './more-arrow-down.component';

describe('MoreArrowDownComponent', () => {
  let component: MoreArrowDownComponent;
  let fixture: ComponentFixture<MoreArrowDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreArrowDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreArrowDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
