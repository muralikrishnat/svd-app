import { Component, OnInit } from '@angular/core';

import { AppComponent } from '../../app.component';
import { SessionService } from '../../services/data/session.service';
import { AuxilaryService } from '../../services/auxilary.service';

@Component({
  selector: 'app-address-new-edit',
  templateUrl: './address-new-edit.component.html',
  styleUrls: ['./address-new-edit.component.less']
})
export class AddressNewEditComponent implements OnInit {
  newAddress: any = {
    region: 'OH',
    country: 'USA',
    street1: 'Street 1',
    street2: 'optinal',
    postcode: '73301',
    city: 'Kentucky',
    district: ''
  };

  showStates = false;
  showCounty = false;
  StatesByCountry: Array<any> = [];
  States = [];
  Districts = [];
  constructor(
    public app: AppComponent,
    private aux: AuxilaryService,
    private session: SessionService
  ) {

  }

  ngOnInit() {
    if (this.session.get('user')) {
      this.aux.getStates().then(({ err, resp }) => {
        if (!err && resp._embedded && resp._embedded.regions) {
          this.States = resp._embedded.regions;
          const states = resp._embedded.regions.filter((s) => {
            return s.country === this.newAddress.country;
          });
          this.StatesByCountry = states;
        }
      });
    }
  }

  setState(state) {
    this.newAddress.region = state.abbreviation;
    this.aux.getDistricts({
      country: this.newAddress.country,
      region: this.newAddress.region
    }).then(({ err, resp }) => {
      if (!err && resp._embedded && resp._embedded.serviceAreas) {
        this.Districts = resp._embedded.serviceAreas;
      }
    });
  }

  setCounty(county) {
    this.newAddress.district = county.description;
  }


  updateCountry(selectedCountry) {
    const states = this.States.filter((s) => {
      return s.country === selectedCountry;
    });
    this.StatesByCountry = states;
    this.newAddress.region = '';
    this.newAddress.district = '';
  }

  saveAddress() {
    const customer = this.session.get('customer');
    if (customer && customer.id) {
      this.aux.updateCustomer({
        address: this.newAddress,
        customerid: customer.id
      }).then((res) => {
        console.log('new Address ', res);
        this.app.navigateByUrl('/address-list', 'slidedown');
      });
    }
  }

}
