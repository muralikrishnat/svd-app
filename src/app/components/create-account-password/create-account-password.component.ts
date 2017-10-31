import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-create-account-password',
  templateUrl: './create-account-password.component.html',
  styleUrls: ['./create-account-password.component.less']
})
export class CreateAccountPasswordComponent implements OnInit {

  user: any = {};
  constructor(
    private app: AppComponent
  ) { }

  ngOnInit() {
  }

  navigationTo(url, pageTransiation) {
    this.app.navigateByUrl(url, pageTransiation);
  }
  createAccount() {
    this.app.navigateByUrl('/create-account-code');
  }
}
