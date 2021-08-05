import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsAComponent } from './projects-a.component';

describe('ProjectsAComponent', () => {
  let component: ProjectsAComponent;
  let fixture: ComponentFixture<ProjectsAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
