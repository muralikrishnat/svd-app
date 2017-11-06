import { Component } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';

import { routerTransition } from './route-animations';
import { AuthService } from './services/auth/auth.service';
import { ApiService } from './services/api.service';
import { SessionService } from './services/data/session.service';
import { CustomerService } from './services/user/customer.service';
import { UserService } from './services/user/user.service';

import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [routerTransition]
})
export class AppComponent {
  title = 'svd';
  pageTransition = '';
  isLoading = true;
  user: any = {};
  urlHistory = [];

  autheticationPromise = null;
  autheticationPromiseInProgress = false;

  constructor(
    private auth: AuthService
    , private router: Router
    , private api: ApiService
    , private session: SessionService
    , private customer: CustomerService
    , private userService: UserService
  ) {
    this.isLoading = false;
  }
  getAuthentication() {
    if (this.autheticationPromiseInProgress) {
      return this.autheticationPromise;
    } else {
      this.autheticationPromiseInProgress = true;
      this.autheticationPromise = this.auth.authenticate().then(({ err, resp }) => {
        if (!err) {
          this.session.set('user', resp);
          this.user = resp;
        }
        this.autheticationPromiseInProgress = false;
        return { err, resp };
      });
      return this.autheticationPromise;
    }
  }
  getState(outlet) {
    return this.pageTransition;
  }

  routerTransitionDone($event) {
    this.pageTransition = '';
  }

  navigateByUrl(url, pageTransition?) {
    this.pageTransition = pageTransition || 'slideleft';
    this.router.navigateByUrl(url);
  }

  setAccountType(roleName) {
    this.session.set('role', roleName);
  }

}
