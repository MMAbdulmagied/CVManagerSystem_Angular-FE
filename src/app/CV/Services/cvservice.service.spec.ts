import { TestBed } from '@angular/core/testing';

import { CVServiceService } from './cvservice.service';

describe('CVServiceService', () => {
  let service: CVServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CVServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
