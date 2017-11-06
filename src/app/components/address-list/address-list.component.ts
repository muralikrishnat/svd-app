import { Component, OnInit } from '@angular/core';

import { AppComponent } from '../../app.component';
import { AuxilaryService } from '../../services/auxilary.service';
import { SessionService } from '../../services/data/session.service';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.less']
})
export class AddressListComponent implements OnInit {

  Addresses = [];
  constructor(
    public app: AppComponent,
    private aux: AuxilaryService,
    private session: SessionService
  ) { }

  ngOnInit() {
    const user = this.session.get('user');
    if (user) {
      const customer = this.session.get('customer');
      if (customer) {
        this.Addresses = customer.addresses;
      } else {
        this.aux.getCustomersByOwnerEmail({
          owneremail: user.email
        }).then(({ err, resp }) => {
          if (!err) {
            this.session.set('customer', resp);
          }
          if (resp.addresses) {
            this.Addresses = resp.addresses;
          } else {
            this.Addresses = [];
          }
        });
      }
    }
  }

  addAdrress() {
    this.app.navigateByUrl('/address-new');
  }

  goToMachines() {
    this.app.navigateByUrl('/machines-list');
  }

  selectAddress(address) {
    if (this.session.get('isMachine') && this.session.get('back_url')) {
      this.session.set('isMachine', null);
      this.session.set('selectedAddress', address);
      this.app.navigateByUrl(this.session.get('back_url'));
    }
  }
}
