import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentregistrationComponent } from './studentregistration.component';

describe('StudentregistrationComponent', () => {
  let component: StudentregistrationComponent;
  let fixture: ComponentFixture<StudentregistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentregistrationComponent]
    });
    fixture = TestBed.createComponent(StudentregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
