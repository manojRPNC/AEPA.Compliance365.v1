import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedCeuCoursesPageComponent } from './approved-ceu-courses-page.component';

describe('ApprovedCeuCoursesPageComponent', () => {
  let component: ApprovedCeuCoursesPageComponent;
  let fixture: ComponentFixture<ApprovedCeuCoursesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApprovedCeuCoursesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovedCeuCoursesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
