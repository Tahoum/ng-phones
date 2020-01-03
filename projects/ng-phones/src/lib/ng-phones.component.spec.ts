import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgPhonesComponent } from './ng-phones.component';

describe('NgPhonesComponent', () => {
  let component: NgPhonesComponent;
  let fixture: ComponentFixture<NgPhonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgPhonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgPhonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
