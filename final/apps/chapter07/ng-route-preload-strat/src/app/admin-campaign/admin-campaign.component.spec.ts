import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCampaignComponent } from './admin-campaign.component';

describe('AdminCampaignComponent', () => {
  let component: AdminCampaignComponent;
  let fixture: ComponentFixture<AdminCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AdminCampaignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
