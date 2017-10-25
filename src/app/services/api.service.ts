import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  makeRequest(opts) {
    let headers = this.getHeaders(opts);
    let promise, url = environment.apiUrl + '/' + opts.url;
    switch (opts.method) {
      case 'DELETE':
        promise = this.http.delete(url, { headers, responseType: 'json' });
        break;
      case 'PATCH':
        promise = this.http.patch(url, opts.body || {}, { headers, responseType: "json" });
        break;
      case 'POST':
        promise = this.http.post(url, opts.body || {}, { headers, responseType: "json" });
        break;
      case 'GET':
      default:
        promise = this.http.get(url, { headers, responseType: "json" });
        break;
    }
    return promise;
  }

  getHeaders(opts) {
    let headers = new HttpHeaders();
    headers.set('Authorization', '');
    if (opts.headers) {
      Object.assign(headers, opts.headers);
    }
    return headers;
  }

  get(opts) {
    opts.method = 'GET';
    this.makeRequest(opts);
  }

  post(opts) {
    opts.method = 'POST';
    this.makeRequest(opts);
  }

  patch(opts) {
    opts.method = 'PATCH';
    this.makeRequest(opts);
  }

  delete(opts) {
    opts.method = 'DELETE';
    this.makeRequest(opts);
  }

}
