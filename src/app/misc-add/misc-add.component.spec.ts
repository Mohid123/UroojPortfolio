import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscAddComponent } from './misc-add.component';

describe('MiscAddComponent', () => {
  let component: MiscAddComponent;
  let fixture: ComponentFixture<MiscAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiscAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
