import { TestBed } from '@angular/core/testing';

import { MachzorimRepository } from './machzorim.repository';

describe('PersistenceService', () => {
  let service: MachzorimRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MachzorimRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
