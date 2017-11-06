import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

import { SessionService } from '../../services/data/session.service';
import { AuxilaryService } from '../../services/auxilary.service';

@Component({
  selector: 'app-create-account-type',
  templateUrl: './create-account-type.component.html',
  styleUrls: ['./create-account-type.component.less']
})
export class CreateAccountTypeComponent implements OnInit {

  constructor(
    public app: AppComponent,
    private session: SessionService,
    private aux: AuxilaryService
  ) { }

  ngOnInit() {
  }

  navigateByUrl(url, pageTransiation) {
    this.app.navigateByUrl(url, pageTransiation);
  }

  setRoleTypeAndNavigate(role, url, routeAnimation) {
    this.session.set('role', role);
    this.app.navigateByUrl(url, routeAnimation);
  }


}
