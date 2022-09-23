import { TestBed } from '@angular/core/testing';

import { CrudCertificatesService } from './crud-certificates.service';

describe('CrudCertificatesService', () => {
  let service: CrudCertificatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudCertificatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
