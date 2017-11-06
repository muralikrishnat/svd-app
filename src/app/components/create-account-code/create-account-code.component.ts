import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

import { AuxilaryService } from '../../services/auxilary.service';
import { SessionService } from '../../services/data/session.service';

@Component({
  selector: 'app-create-account-code',
  templateUrl: './create-account-code.component.html',
  styleUrls: ['./create-account-code.component.less']
})
export class CreateAccountCodeComponent implements OnInit {

  verificationCode: '';
  constructor(
    public app: AppComponent
    , private aux: AuxilaryService
    , private session: SessionService
  ) { }

  ngOnInit() {
    this.verificationCode = '';
  }

  verify() {
    const user = this.session.get('user');
    if (user) {
      this.aux.verifyAuthCode({
        email: user.email,
        authToken: this.verificationCode
      }).then(({ err, resp }) => {
        if (!err) {
          this.session.set('user', resp);
          if (user.roles && user.roles[0]) {
            if (user.roles[0].role === 'CUSTOMER') {
              this.aux.createCustomer({
                name: user.firstName + ' ' + user.lastName
              }).then(({ err1, resp1 }) => {
                this.app.navigateByUrl('/address-list');
              });
            } else if (user.roles[0].role === 'CUSTOMER_PURCHASER') {
              this.app.navigateByUrl('/create-account-teamname');
            }
          }
        }
      });
    }
  }

  resendVerificationCode() {
    const user = this.session.get('user');
    if (user) {
      this.aux.resendVerifyCode({
        id: user.id
      });
    }
  }
}
