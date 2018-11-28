import { TestBed } from '@angular/core/testing';

import { ServiceproductService } from './serviceproduct.service';

describe('ServiceproductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceproductService = TestBed.get(ServiceproductService);
    expect(service).toBeTruthy();
  });
});
