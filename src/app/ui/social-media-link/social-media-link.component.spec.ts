import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaLinkComponent } from './social-media-link.component';

describe('SocialMediaLinkComponent', () => {
  let component: SocialMediaLinkComponent;
  let fixture: ComponentFixture<SocialMediaLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialMediaLinkComponent]
    });
    fixture = TestBed.createComponent(SocialMediaLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
