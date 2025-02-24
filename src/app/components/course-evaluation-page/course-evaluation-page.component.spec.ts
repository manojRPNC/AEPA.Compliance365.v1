import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseEvaluationPageComponent } from './course-evaluation-page.component';

describe('CourseEvaluationPageComponent', () => {
  let component: CourseEvaluationPageComponent;
  let fixture: ComponentFixture<CourseEvaluationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseEvaluationPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseEvaluationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
