import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';

@Injectable()
export class MachineService {

  constructor(
    private api: ApiService
  ) { }

  getActiveManufacturers() {
    return this.api.get({
      url: '/manufacturers'
    });
  }

  getActiveTechnologyTypes() {
    return this.api.get({
      url: '/technologyTypes'
    });
  }
}
