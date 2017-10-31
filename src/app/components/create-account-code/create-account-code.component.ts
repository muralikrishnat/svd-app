import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-create-account-code',
  templateUrl: './create-account-code.component.html',
  styleUrls: ['./create-account-code.component.less']
})
export class CreateAccountCodeComponent implements OnInit {

  constructor(
    private app: AppComponent
  ) { }

  ngOnInit() {
  }

  navigationTo(url, pageTransiation) {
    this.app.navigateByUrl(url, pageTransiation);
  }

  verify() {
    this.app.navigateByUrl('/create-account-teamname');
  }

}
