import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogYtAddComponent } from './blog-yt-add.component';

describe('BlogYtAddComponent', () => {
  let component: BlogYtAddComponent;
  let fixture: ComponentFixture<BlogYtAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogYtAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogYtAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
