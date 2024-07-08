import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MainApplicationComponent } from "./main-application.component";

describe("MainApplicationComponent", () => {
  let component: MainApplicationComponent;
  let fixture: ComponentFixture<MainApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainApplicationComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
