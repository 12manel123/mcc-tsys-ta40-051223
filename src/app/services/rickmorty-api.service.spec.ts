import { TestBed } from '@angular/core/testing';

import { RickmortyApiService } from './rickmorty-api.service';

describe('RickmortyApiService', () => {
  let service: RickmortyApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RickmortyApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
