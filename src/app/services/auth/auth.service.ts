import { Injectable } from '@angular/core';
import { ApiService, Opts } from '../api.service';
@Injectable()
export class AuthService {

  constructor(
    private api: ApiService
  ) { }

  login(username, password) {
    const opts: Opts = {
      url: '/auth/login',
      data: {
        email: username,
        password: password
      }
    };
    return this.api.post(opts).then((resp) => {
      console.log('login resp', resp);
    });
  }

}
