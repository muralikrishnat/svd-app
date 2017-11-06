import { Injectable } from '@angular/core';
import * as $ from 'jquery';

import { environment } from '../../environments/environment';
import { UtilsService } from '../services/utils/utils.service';

@Injectable()
export class ApiService {

  Authorization;
  constructor(
    private utils: UtilsService
  ) { }

  makeRequest(opts) {
    const headers = this.getHeaders(opts);
    if (this.Authorization || (opts.headers && opts.headers.Authorization)) {
      headers['Authorization'] = (opts.headers && opts.headers.Authorization ? opts.headers.Authorization : this.Authorization);
    }
    let url = environment.apiUrl + (opts.url.indexOf('/') === 0 ? opts.url : '/' + opts.url);
    if (opts.isFullUrl) {
      url = opts.url;
    }
    const promise = new Promise((res, rej) => {
      $.ajax({
        method: opts.method,
        url: url,
        contentType: 'application/json',
        headers: headers,
        data: JSON.stringify(opts.data),
        crossDomain: true,
        success: (data, textStatus, response) => {
          if (response.getResponseHeader('authorization') && opts.setAuthorization) {
            this.Authorization = response.getResponseHeader('authorization');
            this.utils.setCookie('authorization', this.Authorization);
          }
          res({ resp: data, fullResponse: response });
        }, error: (err) => {
          res({ err: err.responseJSON });
        }
      });
    });
    return promise;
  }

  getHeaders(opts: Opts) {
    const headers = { 'Accept': 'application/json' };
    if (opts.headers) {
      Object.assign(headers, opts.headers);
    }
    return headers;
  }

  get(opts: Opts) {
    opts.method = 'GET';
    return this.makeRequest(opts);
  }

  post(opts: Opts) {
    opts.method = 'POST';
    return this.makeRequest(opts);
  }

  patch(opts: Opts) {
    opts.method = 'PATCH';
    return this.makeRequest(opts);
  }

  delete(opts: Opts) {
    opts.method = 'DELETE';
    return this.makeRequest(opts);
  }

}


export class Opts {
  method?: string;
  data?: any;
  url: string;
  headers?: any;
  setAuthorization?: boolean;
  withRootPassword?: any;
  isFullUrl?: boolean;
}
