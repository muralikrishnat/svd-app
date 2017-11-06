import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppComponent } from '../../app.component';
import { AuxilaryService } from '../../services/auxilary.service';
import { SessionService } from '../../services/data/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  user: any = {};
  constructor(
    public app: AppComponent,
    private aux: AuxilaryService,
    private session: SessionService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = {
      email: 'muralikrishna8811+cp1509751073509@gmail.com',
      password: 'password'
    };
  }

  login(form?) {
    this.aux.login({
      email: this.user.email,
      password: this.user.password
    }).then(({ err, resp }) => {
      console.log('resp', resp);
      if (!err) {
        this.session.set('user', resp);
        if (resp.status === 'PENDING_EMAIL_VERIFICATION' || resp.status === 'PENDING_APPROVAL') {
          this.router.navigateByUrl('/create-account-code');
        } else if (resp.status === 'PENDING_ACCOUNT_CREATION') {
          this.router.navigateByUrl('/create-account-teamname');
        } else if (resp.status === 'PENDING_JOIN') {
          this.router.navigateByUrl('/create-account-jointeam');
        } else if (resp.status === 'ACTIVE') {
          this.router.navigateByUrl('/dashboard');
        }
      }
    });
  }

}
