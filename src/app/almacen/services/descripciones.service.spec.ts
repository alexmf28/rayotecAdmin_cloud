import { TestBed } from '@angular/core/testing';

import { DescripcionesService } from './descripciones.service';

describe('DescripcionesService', () => {
  let service: DescripcionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DescripcionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
