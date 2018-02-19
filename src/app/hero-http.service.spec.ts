import { TestBed, inject } from '@angular/core/testing';

import { HeroHttpService } from './hero-http.service';

describe('HeroHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroHttpService]
    });
  });

  it('should be created', inject([HeroHttpService], (service: HeroHttpService) => {
    expect(service).toBeTruthy();
  }));
});
