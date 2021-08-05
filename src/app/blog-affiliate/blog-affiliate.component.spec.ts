import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAffiliateComponent } from './blog-affiliate.component';

describe('BlogAffiliateComponent', () => {
  let component: BlogAffiliateComponent;
  let fixture: ComponentFixture<BlogAffiliateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogAffiliateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogAffiliateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
