import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradingInterfaceComponent } from './grading-interface.component';

describe('GradingInterfaceComponent', () => {
  let component: GradingInterfaceComponent;
  let fixture: ComponentFixture<GradingInterfaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GradingInterfaceComponent]
    });
    fixture = TestBed.createComponent(GradingInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
