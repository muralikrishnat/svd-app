import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manufacturer-new-edit',
  templateUrl: './manufacturer-new-edit.component.html',
  styleUrls: ['./manufacturer-new-edit.component.less']
})
export class ManufacturerNewEditComponent implements OnInit {
  _router:Router;
  machine:object = new Object();
  constructor(router: Router) {
    this._router = router;
  }

  ngOnInit() {
    this.machine = {
      manufacturer: {
        name: 'Baker Manufacturing'
      },
      modelNumber: 'bker87',
      serialNumber: 'bjk2743',
      technologyType: {
        name: 'Laser Injection'
      },
      company: {
        name: 'company name',
        address: {
          street: '1234 Fake Street',
          location: 'cincinnati',
          pin: 'oh 45244',
          country: 'united states'
        }
      },
      serviceDetails: {
        machineStatus: '',
        urgency: '',
        problem: ''
      }
    }
  }

}
