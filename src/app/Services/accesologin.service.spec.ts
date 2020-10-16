import { TestBed } from '@angular/core/testing';

import { AccesologinService } from './accesologin.service';

describe('AccesologinService', () => {
  let service: AccesologinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccesologinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
