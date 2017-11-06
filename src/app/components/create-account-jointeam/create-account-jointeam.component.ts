import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { CustomerService } from '../../services/user/customer.service';
import { AuxilaryService } from '../../services/auxilary.service';
import { SessionService } from '../../services/data/session.service';

@Component({
  selector: 'app-create-account-jointeam',
  templateUrl: './create-account-jointeam.component.html',
  styleUrls: ['./create-account-jointeam.component.less']
})
export class CreateAccountJointeamComponent implements OnInit {
  formData: any = {
  };
  constructor(
    public app: AppComponent,
    private aux: AuxilaryService,
    private session: SessionService
  ) { }

  ngOnInit() {
    this.formData.teamleadmail = 'muralikrishna8811+cp1509751073509@gmail.com';
  }

  joinTeam() {
    let user, customer;
    this.aux.authenticate().then(({ err, resp }) => {
      if (!err) {
        this.session.set('user', resp);
        user = resp;
      }
      return this.aux.getCustomersByOwnerEmail({
        owneremail: this.formData.teamleadmail
      });
    }).then(({ err, resp }) => {
      if (!err) {
        customer = resp;
      }
      if (user && customer) {
        return this.aux.setUserToCustomer({
          userid: user.id,
          customerid: customer.id
        });
      } else {
        return new Promise((r, j) => {
          r({ err: 'user and customer not found' });
        });
      }
    }).then(({ err, resp }) => {
      if (!err) {
        this.app.navigateByUrl('/create-account-code');
      }
    });
  }

}
