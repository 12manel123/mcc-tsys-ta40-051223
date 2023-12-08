import { TestBed } from '@angular/core/testing';

import { RickmortyService } from './rickmorty.service';

describe('RickmortyService', () => {
  let service: RickmortyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RickmortyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
