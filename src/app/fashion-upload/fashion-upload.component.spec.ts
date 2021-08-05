import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionUploadComponent } from './fashion-upload.component';

describe('FashionUploadComponent', () => {
  let component: FashionUploadComponent;
  let fixture: ComponentFixture<FashionUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FashionUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
