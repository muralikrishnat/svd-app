import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { SessionService } from '../../services/data/session.service';

@Component({
  selector: 'app-create-account-name',
  templateUrl: './create-account-name.component.html',
  styleUrls: ['./create-account-name.component.less']
})
export class CreateAccountNameComponent implements OnInit {
  userDetails: any = {

  };
  constructor(
    public app: AppComponent,
    private session: SessionService
  ) { }

  ngOnInit() {
  }

  saveToSession() {
    this.session.set('userDetails', this.userDetails);
    this.app.navigateByUrl('/create-account-password');
  }
}
