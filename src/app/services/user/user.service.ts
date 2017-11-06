import { Injectable } from '@angular/core';
import { ApiService, Opts } from '../api.service';
import { User } from '../../models/user';

@Injectable()
export class UserService {

  constructor(
    private api: ApiService
  ) { }

  createUser(opts) {
    let headers = {};
    if (opts.headers) {
      headers = opts.headers;
    }
    const formData = {
      email: opts.email,
      password: opts.password,
      roles: opts.roles
    };
    if (opts.firstName) {
      formData['firstName'] = opts.firstName;
    }
    if (opts.firstName) {
      formData['lastName'] = opts.lastName;
    }
    if (opts.firstName) {
      formData['phone'] = opts.phone;
    }
    if (opts.safetyTrained) {
      formData['safetyTrained'] = opts.safetyTrained;
    }
    return this.api.post({
      url: '/users',
      data: formData,
      headers: headers
    });
  }

  getUsers() {
    return this.api.post({
      url: '/auth/login',
      data: {
        email: 'mtottimpudi@evoketechnologies.com',
        password: 'password'
      }
    }).then(({ err, fullResponse }) => {
      const Authorization = fullResponse.getResponseHeader('authorization');
      return this.api.get({
        url: '/users',
        headers: {
          Authorization: Authorization
        }
      });
    });
  }

  resendVerificationCode(opts) {
    let headers = {};
    if (opts.headers) {
      headers = opts.headers;
    }
    return this.api.post({
      url: '/users/' + opts.id + '/actions/reactivate',
      headers: headers
    });
  }

  verifyUser(opts) {
    let headers = {};
    if (opts.headers) {
      headers = opts.headers;
    }
    return this.api.post({
      url: '/auth/activate',
      data: {
        email: opts.email,
        authToken: opts.authToken
      },
      headers: headers
    });
  }

  updateUser(opts) {
    if (opts.id) {
      const updatingUser: any = {};
      updatingUser.id = opts.id;
      updatingUser.firstName = opts.firstName;
      updatingUser.lastName = opts.lastName;
      updatingUser.phone = opts.phone;
      return this.api.patch({
        url: '/users/' + opts.id,
        data: updatingUser
      });
    } else {
      return new Promise((r, e) => {
        r({
          err: {
            code: 400,
            msg: 'user id is required'
          }
        });
      });
    }
  }
}
