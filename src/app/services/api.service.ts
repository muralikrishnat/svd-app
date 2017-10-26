import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import * as $ from 'jquery';

@Injectable()
export class ApiService {

  Authorization;
  constructor() { }

  makeRequest(opts) {
    const headers = this.getHeaders(opts);
    if (this.Authorization || (opts.headers && opts.headers.Authorization)) {
      headers['Authorization'] = (opts.headers && opts.headers.Authorization ? opts.headers.Authorization : this.Authorization);
    }
    const url = environment.apiUrl + (opts.url.indexOf('/') === 0 ? opts.url : '/' + opts.url);
    const promise = new Promise((res, rej) => {
      $.ajax({
        method: opts.method,
        url: url,
        contentType: 'application/json',
        headers: headers,
        data: JSON.stringify(opts.data),
        success: function (data, textStatus, response) {
          res(data);
        }, error: function (err) {
          rej(err);
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
}