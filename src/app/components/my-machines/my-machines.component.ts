import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

import { AuxilaryService } from '../../services/auxilary.service';
import { SessionService } from '../../services/data/session.service';
@Component({
  selector: 'app-my-machines',
  templateUrl: './my-machines.component.html',
  styleUrls: ['./my-machines.component.less']
})
export class MyMachinesComponent implements OnInit {
  Machines = [];
  constructor(
    public app: AppComponent,
    private session: SessionService,
    private aux: AuxilaryService
  ) { }

  ngOnInit() {
    const customer = this.session.get('customer');
    if (customer) {
      this.aux.getMachinesByCustomer({
        customerid: customer.id
      }).then(({ err, resp }) => {
        if (!err && resp._embedded && resp._embedded.machines) {
          this.Machines = resp._embedded.machines;
        } else {
          this.Machines = [];
        }
      });
    }
  }

  addMachine() {
    this.app.navigateByUrl('/machines-new');
  }

}
