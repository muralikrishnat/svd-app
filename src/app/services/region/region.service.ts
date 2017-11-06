import { Injectable } from '@angular/core';

import { ApiService } from '../api.service';

@Injectable()
export class RegionService {

  constructor(
    private api: ApiService
  ) { }

  getAllStates() {
    return this.api.get({
      url: '/regions'
    });
  }

  getServicePlacesByStateAndContry(opts) {
    return this.api.get({
      url: '/serviceAreas/search/findAllByCountryAndRegion?country=' + opts.country + '&region=' + opts.region
    });
  }
}
