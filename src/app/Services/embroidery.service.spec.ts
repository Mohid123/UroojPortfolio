import { TestBed } from '@angular/core/testing';

import { EmbroideryService } from './embroidery.service';

describe('EmbroideryService', () => {
  let service: EmbroideryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmbroideryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
