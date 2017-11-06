import { Component, OnInit } from '@angular/core';

import { AppComponent } from '../../app.component';
import { AuxilaryService } from '../../services/auxilary.service';
import { SessionService } from '../../services/data/session.service';

@Component({
  selector: 'app-create-account-authority',
  templateUrl: './create-account-authority.component.html',
  styleUrls: ['./create-account-authority.component.less']
})
export class CreateAccountAuthorityComponent implements OnInit {

  constructor(
    public app: AppComponent
    , private aux: AuxilaryService
    , private session: SessionService
  ) { }

  ngOnInit() {
  }

  setRoleTypeAndNavigate(role, url, routeAnimation) {
    this.session.set('role', role);
    this.app.navigateByUrl(url, routeAnimation);
  }

}
