import { TestBed } from '@angular/core/testing';

import { TransactionMetadataStorageService } from './transaction-metadata-storage.service';

describe('StorageService', () => {
  let service: TransactionMetadataStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionMetadataStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
