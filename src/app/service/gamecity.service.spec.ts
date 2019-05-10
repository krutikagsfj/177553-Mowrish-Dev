import { TestBed } from '@angular/core/testing';

import { GamecityService } from './gamecity.service';

describe('GamecityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GamecityService = TestBed.get(GamecityService);
    expect(service).toBeTruthy();
  });
});
