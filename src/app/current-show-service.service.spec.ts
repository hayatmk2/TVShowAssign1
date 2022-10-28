import { TestBed } from '@angular/core/testing';

import { CurrentShowServiceService } from './current-show-service.service';

describe('CurrentShowServiceService', () => {
  let service: CurrentShowServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentShowServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
