import { ComponentFixture, TestBed } from '@angular/core/testing';

import { High52Component } from './high52.component';

describe('High52Component', () => {
  let component: High52Component;
  let fixture: ComponentFixture<High52Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [High52Component]
    });
    fixture = TestBed.createComponent(High52Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
