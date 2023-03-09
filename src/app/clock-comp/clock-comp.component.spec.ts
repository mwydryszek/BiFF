import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockCompComponent } from './clock-comp.component';

describe('ClockCompComponent', () => {
  let component: ClockCompComponent;
  let fixture: ComponentFixture<ClockCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClockCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClockCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
