import { Injectable } from '@angular/core';

import { Cookie } from 'ng2-cookies';

@Injectable()
export class UtilsService {

  constructor() { }

  setCookie(key, val) {
    Cookie.set(key, val);
  }

  getCookie(key) {
    return Cookie.get(key);
  }

}
