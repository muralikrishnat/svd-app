import { Injectable } from '@angular/core';

@Injectable()
export class PubSubService {
  EventHash: any = {};
  constructor() { }

  subscribe(eventName, subscribeFn) {
    if (!this.EventHash[eventName]) {
      this.EventHash[eventName] = [];
    }
    this.EventHash[eventName].push(subscribeFn);
  }

  publish(eventName) {
    if (this.EventHash[eventName]) {
      this.EventHash[eventName].forEach((fn) => {
        setTimeout(fn, 0);
      });
    }
  }

}
