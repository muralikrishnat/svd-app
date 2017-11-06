import { Component, OnInit } from '@angular/core';

import { AppComponent } from '../../app.component';

import { SessionService } from '../../services/data/session.service';
import { AuxilaryService } from '../../services/auxilary.service';

@Component({
  selector: 'app-create-account-password',
  templateUrl: './create-account-password.component.html',
  styleUrls: ['./create-account-password.component.less']
})
export class CreateAccountPasswordComponent implements OnInit {

  user: any = {};
  constructor(
    public app: AppComponent
    , private aux: AuxilaryService
    , private session: SessionService
  ) { }

  ngOnInit() {
    // if (!this.session.get('role') && this.session.get('flow') === 'ONBOARDING') {
    //   this.app.navigateByUrl('/create-account-type');
    // }
    const extns = this.session.get('role') === 'CUSTOMER' ? 'cs' : 'cp';
    this.user.email = 'muralikrishna8811+' + (extns) + (new Date).getTime() + '@gmail.com';
    this.user.password = 'password';
    this.user.confirmpassword = 'password';
  }

  createAccount(form?) {
    const newUserData: any = {
      email: this.user.email,
      password: this.user.password,
      roles: [
        {
          'role': this.session.get('role')
        }
      ]
    };

    switch (this.session.get('role')) {
      case 'CUSTOMER':
        const userDetails = this.session.get('userDetails');
        if (userDetails) {
          newUserData.firstName = userDetails.firstName;
          newUserData.lastName = userDetails.lastName;
          newUserData.phone = userDetails.phone;
        }
        this.aux.createUser(newUserData).then(({ err, resp }) => {
          if (!err) {
            this.aux.login({
              email: newUserData.email,
              password: newUserData.password
            }).then(({ err: errLogin, resp: respLogin }) => {
              this.session.set('user', respLogin);
              this.app.navigateByUrl('/create-account-jointeam');
            });
          }
        });
        break;
      case 'CUSTOMER_PURCHASER':
        this.aux.createUser(newUserData).then(({ err, resp }) => {
          if (!err) {
            this.aux.login({
              email: newUserData.email,
              password: newUserData.password
            }).then(({ err: errLogin, resp: respLogin }) => {
              this.session.set('user', respLogin);
              this.app.navigateByUrl('/create-account-code');
              this.aux.resendVerifyCode({
                id: respLogin.id
              });
            });
          } else {

          }
        });
        break;
      default:
        break;
    }

    // this.userService.createUser(newUserData).then(({ err, resp }) => {
    //   if (!err) {
    //     if (this.session.get('role') === 'CUSTOMER_PURCHASER') {
    //       this.userService.resendVerificationCode({ id: resp.id }).then(() => {
    //         this.app.navigateByUrl('/create-account-code');
    //       });
    //     } else if (this.session.get('role') === 'CUSTOMER') {

    //       this.app.navigateByUrl('/create-account-jointeam');
    //     }
    //   } else {
    //     // this.app.navigateByUrl('/create-account-code');
    //   }
    // });
  }
}
