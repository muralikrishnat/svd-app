import { Component } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';

import { routerTransition } from './route-animations';
import { AuthService } from './services/auth/auth.service';
import { ApiService } from './services/api.service';

declare var window : any;
window.$ = window.jQuery = $;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [routerTransition]
})
export class AppComponent {
  title = 'svd';
  pageTransition = '';

  constructor(
    private auth: AuthService
    , private router: Router
    , private api: ApiService
  ) {

    let loginModel = {
      email: 'muralikrishna8811@gmail.com',
      password: 'password'
    };

    loginModel.email = 'mtottimpudi@evoketechnologies.com';
    loginModel.password = 'password';

    // loginModel.email = 'muralikrishna8811+customer1@evoketechnologies.com';
    // loginModel.password = 'password';

    // 1294
    // loginModel.email = 'muralikrishna8811+customer2@evoketechnologies.com';
    // loginModel.password = 'password';

    auth.login(loginModel).then(() => {
      
      api.get({
        url :'/users'
      });

      // api.get({
      //   url: '/users/search/findByRole?role=CUSTOMER_PURCHASER'
      // });

      // api.post({
      //   url: '/users',
      //   data: {
      //     email: 'muralikrishna8811+purchaser1@gmail.com',
      //     password: 'password',
      //     roles: [
      //       {
      //         "role": "CUSTOMER_PURCHASER"
      //       }
      //     ]
      //   }
      // });

      // api.post({ url: 'users/1238/actions/reactivate' });
      // 134897
      // api.post({
      //   url: '/auth/activate', data: {
      //     email: 'muralikrishna8811@gmail.com',
      //     authToken: '134897'
      //   }
      // });

      // api.get({
      //   url: '/users/search/findByRole?role=CUSTOMER_PURCHASER'
      // });

      // api.post({
      //   url :'/customers',
      //   data: {
      //     "name": "Cardinal Solutions Group"
      //   }
      // });


      // api.get({
      //   url :'/customers/514'
      // });

      // api.get({
      //   url :'/users/1294'
      // });

      // api.post({
      //   url: '/users/1294/customer',
      //   data: {
      //     "owner": {
      //       email: 'muralikrishna8811@gmail.com'
      //     }
      //   }
      // });

      // api.get({
      //   url: '/users/1238/customer'
      // });

      // let purchasroEmail = 'bear@mailinator.com';
      // // purchasroEmail = 'mtottimpudi@evoketechnologies.com';
      // purchasroEmail = 'muralikrishna8811@gmail.com';
      // api.get({
      //   url: 'customers/search/findByOwner?email=' + purchasroEmail
      // });

    });

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
}
