import { Component, OnInit } from '@angular/core';

import { AppComponent } from '../../app.component';
import { AuxilaryService } from '../../services/auxilary.service';
import { SessionService } from '../../services/data/session.service';

@Component({
  selector: 'app-manufacturer-list',
  templateUrl: './manufacturer-list.component.html',
  styleUrls: ['./manufacturer-list.component.less']
})
export class ManufacturerListComponent implements OnInit {
  Manufacturers = [];
  constructor(
    public app: AppComponent,
    private aux: AuxilaryService,
    private session: SessionService
  ) { }

  getManufacturers() {
    this.aux.getManufacturers().then(({ err, resp }) => {
      if (!err && resp._embedded && resp._embedded.manufacturers) {
        this.Manufacturers = resp._embedded.manufacturers;
      }
    });
  }
  ngOnInit() {
    this.aux.getLoggedUser().then(({ err, user }) => {
      this.getManufacturers();
    });
  }

  navigateBack() {
    const backUrl = this.session.get('back_url');
    if (backUrl) {
      this.app.navigateByUrl(backUrl, 'slidedown');
    } else {
      this.app.navigateByUrl('/address-list', 'slidedown');
    }
  }

  selectManufacturer(item) {
    this.session.set('selectedManufacturer', item);
    this.navigateBack();
  }
}
