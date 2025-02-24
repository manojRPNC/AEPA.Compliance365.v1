import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtedWebsitesPageComponent } from './realted-websites-page.component';

describe('RealtedWebsitesPageComponent', () => {
  let component: RealtedWebsitesPageComponent;
  let fixture: ComponentFixture<RealtedWebsitesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealtedWebsitesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealtedWebsitesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
