import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Low52Component } from './low52.component';

describe('Low52Component', () => {
  let component: Low52Component;
  let fixture: ComponentFixture<Low52Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Low52Component]
    });
    fixture = TestBed.createComponent(Low52Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
