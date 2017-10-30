import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-create-account-type',
  templateUrl: './create-account-type.component.html',
  styleUrls: ['./create-account-type.component.less']
})
export class CreateAccountTypeComponent implements OnInit {

  constructor(
    private app:AppComponent 
  ) { }

  ngOnInit() {
  }

  navigationTo(url, pageTransiation) {
    this.app.navigateByUrl(url, pageTransiation);
  }

}
