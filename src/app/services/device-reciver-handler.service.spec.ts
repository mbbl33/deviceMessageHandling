import { TestBed } from '@angular/core/testing';

import { DeviceReciverHandlerService } from './device-reciver-handler.service';

describe('DeviceReciverHandlerService', () => {
  let service: DeviceReciverHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeviceReciverHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
