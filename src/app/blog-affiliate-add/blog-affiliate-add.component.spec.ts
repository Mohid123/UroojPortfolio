import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAffiliateAddComponent } from './blog-affiliate-add.component';

describe('BlogAffiliateAddComponent', () => {
  let component: BlogAffiliateAddComponent;
  let fixture: ComponentFixture<BlogAffiliateAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogAffiliateAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogAffiliateAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
