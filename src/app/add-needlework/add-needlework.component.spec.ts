import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNeedleworkComponent } from './add-needlework.component';

describe('AddNeedleworkComponent', () => {
  let component: AddNeedleworkComponent;
  let fixture: ComponentFixture<AddNeedleworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNeedleworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNeedleworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
