import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogYtComponent } from './blog-yt.component';

describe('BlogYtComponent', () => {
  let component: BlogYtComponent;
  let fixture: ComponentFixture<BlogYtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogYtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogYtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
