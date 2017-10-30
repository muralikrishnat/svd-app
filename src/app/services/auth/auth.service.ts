import { Injectable } from '@angular/core';
import { ApiService, Opts } from '../api.service';
import { LoginModel } from '../../models/user';
@Injectable()
export class AuthService {

  constructor(
    private api: ApiService
  ) { }

  login(login: LoginModel) {
    const opts: Opts = {
      url: '/auth/login',
      data: {
        email: login.email,
        password: login.password
      },
      setAuthorization: true
    };
    return this.api.post(opts).then(({ err, resp }) => {
      console.log('login resp', resp);

    });
  }

}
