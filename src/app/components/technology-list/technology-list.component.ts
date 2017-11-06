import { Component, OnInit } from '@angular/core';

import { AppComponent } from '../../app.component';
import { AuxilaryService } from '../../services/auxilary.service';
import { SessionService } from '../../services/data/session.service';

@Component({
  selector: 'app-technology-list',
  templateUrl: './technology-list.component.html',
  styleUrls: ['./technology-list.component.less']
})
export class TechnologyListComponent implements OnInit {
  TechnologiesTypes = [];
  constructor(
    public app: AppComponent,
    private aux: AuxilaryService,
    private session: SessionService
  ) { }

  getTechnologiesTypes() {
    this.aux.getTechnologies().then(({ err, resp }) => {
      if (!err && resp._embedded && resp._embedded.technologyTypes) {
        this.TechnologiesTypes = resp._embedded.technologyTypes;
      }
    });
  }

  ngOnInit() {
    this.aux.getLoggedUser().then(({ err, user }) => {
      this.getTechnologiesTypes();
    });
  }

  navigateBack() {
    const backUrl = this.session.get('back_url');
    if (backUrl) {
      this.app.navigateByUrl(backUrl, 'slidedown');
    } else {
      this.app.navigateByUrl('/machines-new', 'slidedown');
    }
  }

  selectTechnologiesType(item) {
    this.session.set('selectedTechnologiesType', item);
    this.navigateBack();
  }
}
