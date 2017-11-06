import { Component, OnInit } from '@angular/core';

import { AppComponent } from '../../app.component';
import { SessionService } from '../../services/data/session.service';
import { AuxilaryService } from '../../services/auxilary.service';

@Component({
  selector: 'app-create-account-createteam',
  templateUrl: './create-account-createteam.component.html',
  styleUrls: ['./create-account-createteam.component.less']
})
export class CreateAccountCreateteamComponent implements OnInit {
  teamDetails: any = {};
  constructor(
    public app: AppComponent
    , private aux: AuxilaryService
    , private session: SessionService
  ) { }

  ngOnInit() {
  }

  createTeam() {
    const user = this.session.get('user');
    if (user) {
      this.aux.createCustomer({
        isTeamCreation: true,
        id: user.id,
        firstName: this.teamDetails.firstName,
        lastName: this.teamDetails.lastName,
        phone: this.teamDetails.phone,
        teamName: this.teamDetails.teamName
      }).then(({ err, resp }) => {
        if (!err) {
          this.app.navigateByUrl('/address-list');
        }
      });
    }
  }
}
