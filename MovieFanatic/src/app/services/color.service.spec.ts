import { TestBed } from '@angular/core/testing';

import { ColorService } from './color.service';

describe('ColorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColorService = TestBed.get(ColorService);
    expect(service).toBeTruthy();
  });
});
