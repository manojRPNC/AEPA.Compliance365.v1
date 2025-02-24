import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorCertificationPageComponent } from './operator-certification-page.component';

describe('OperatorCertificationPageComponent', () => {
  let component: OperatorCertificationPageComponent;
  let fixture: ComponentFixture<OperatorCertificationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperatorCertificationPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatorCertificationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
