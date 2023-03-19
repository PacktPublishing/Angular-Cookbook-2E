import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCampaignComponent } from './employee-campaign.component';

describe('EmployeeCampaignComponent', () => {
  let component: EmployeeCampaignComponent;
  let fixture: ComponentFixture<EmployeeCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ EmployeeCampaignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
