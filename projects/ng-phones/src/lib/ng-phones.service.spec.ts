import { TestBed } from '@angular/core/testing';

import { NgPhonesService } from './ng-phones.service';

describe('NgPhonesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgPhonesService = TestBed.get(NgPhonesService);
    expect(service).toBeTruthy();
  });
});
