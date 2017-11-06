import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {
  private SessionHash: any = {};
  constructor() { }

  get(key) {
    return this.SessionHash[key];
  }

  set(key, val) {
    this.SessionHash[key] = val;
  }

}
