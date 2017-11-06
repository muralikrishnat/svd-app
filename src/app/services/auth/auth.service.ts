import { Injectable } from '@angular/core';
import { ApiService, Opts } from '../api.service';
import { LoginModel } from '../../models/user';
import { UtilsService } from '../utils/utils.service';
@Injectable()
export class AuthService {

  private _adminAuthorization;
  private _authorizationPromise;
  constructor(
    private api: ApiService,
    private utils: UtilsService
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
    return this.api.post(opts);
  }

  getAdminAuthorization(opts) {
    return new Promise((r, j) => {
      if (this._adminAuthorization) {
        r({ authorization: this._adminAuthorization });
      } else {
        this.api.post({
          url: '/auth/login',
          data: {
            email: 'mtottimpudi@evoketechnologies.com',
            password: 'password'
          }
        }).then(({ err, fullResponse }) => {
          if (!err) {
            this._adminAuthorization = fullResponse.getResponseHeader('authorization');
            r({ authorization: this._adminAuthorization });
          } else {
            r({ err });
          }
        });
      }
    });
  }

  authenticate() {
    const authorization = this.utils.getCookie('authorization');
    if (authorization) {
      if (!this._authorizationPromise) {
        this._authorizationPromise = new Promise((r, j) => {
          this.api.get({
            url: 'auth/me',
            setAuthorization: true,
            headers: {
              Authorization: authorization
            }
          }).then(({ err, resp }) => {
            r({ err, resp });
          });
        });
      }
      return this._authorizationPromise;
    } else {
      return new Promise((res, rej) => {
        res({
          err: {
            code: 403,
            msg: 'No Cookie found'
          }
        });
      });
    }
  }
}
