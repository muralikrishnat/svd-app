import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-create-account-authority',
  templateUrl: './create-account-authority.component.html',
  styleUrls: ['./create-account-authority.component.less']
})
export class CreateAccountAuthorityComponent implements OnInit {

  constructor(
    private app: AppComponent
  ) { }

  ngOnInit() {
  }

  navigationTo(url, pageTransiation) {
    this.app.navigateByUrl(url, pageTransiation);
  }

}
