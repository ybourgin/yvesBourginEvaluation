import { TestBed } from '@angular/core/testing';

import { StatistiqueAPIService } from './statistique-api.service';

describe('StatistiqueAPIService', () => {
  let service: StatistiqueAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatistiqueAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
