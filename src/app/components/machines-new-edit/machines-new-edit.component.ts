import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { SessionService } from '../../services/data/session.service';
import { AuxilaryService } from '../../services/auxilary.service';

@Component({
  selector: 'app-machines-new-edit',
  templateUrl: './machines-new-edit.component.html',
  styleUrls: ['./machines-new-edit.component.less']
})
export class MachinesNewEditComponent implements OnInit {
  newMachine: any = {
    manufacturer: {
      id: null,
      name: ''
    },
    "modelNumber": "",
    "serialNumber": "",
    "controlType": "",
    "technologyType": {
      "id": null,
      "name": ''
    },
    "address": {
      id: null
    }
  };
  constructor(
    public app: AppComponent,
    private aux: AuxilaryService,
    private session: SessionService
  ) { }

  ngOnInit() {
    // this.app.getAuthentication().then(() => {
    //   this.customer.getManufacturers();
    //   this.customer.getTechnologyTypes();
    // });

    if (this.session.get('newMachine')) {
      this.newMachine = this.session.get('newMachine');
      this.session.set('newMachine', null);
    }

    if (this.session.get('selectedManufacturer')) {
      this.newMachine.manufacturer.id = this.session.get('selectedManufacturer').id;
      this.newMachine.manufacturer.name = this.session.get('selectedManufacturer').name;
      this.session.set('selectedManufacturerId', null);
    }

    if (this.session.get('selectedTechnologiesType')) {
      this.newMachine.technologyType.id = this.session.get('selectedTechnologiesType').id;
      this.newMachine.technologyType.name = this.session.get('selectedTechnologiesType').name;
      this.session.set('selectedTechnologiesType', null);
    }

    if (this.session.get('selectedAddress')) {
      this.newMachine.address = this.session.get('selectedAddress');
      this.session.set('selectedAddress', null);
    }
  }

  saveMachine() {
    const customer = this.session.get('customer');
    if (customer) {
      this.aux.addMachine({
        customerid: customer.id,
        newMachine: this.newMachine
      }).then((res) => {
        this.app.navigateByUrl('/machines-list', 'slidedown');
      });
    }
  }

  selectAnAddress() {
    this.session.set('back_url', '/machines-new');
    this.session.set('isMachine', true);
    this.session.set('newMachine', this.newMachine);
    this.app.navigateByUrl('/address-list');
  }

  selectManufacturer() {
    this.session.set('back_url', '/machines-new');
    this.session.set('isMachine', true);
    this.session.set('newMachine', this.newMachine);
    this.app.navigateByUrl('/manufacturer-list');
  }

  selectTechnologyType() {
    this.session.set('back_url', '/machines-new');
    this.session.set('isMachine', true);
    this.session.set('newMachine', this.newMachine);
    this.app.navigateByUrl('/technology-list');
  }

}
