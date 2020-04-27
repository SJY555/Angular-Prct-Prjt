import { TestBed } from '@angular/core/testing';

import { ServiceLocalService } from './service-local.service';

describe('ServiceLocalService', () => {
  let service: ServiceLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
