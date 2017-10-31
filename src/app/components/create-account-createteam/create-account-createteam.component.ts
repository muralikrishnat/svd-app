import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-create-account-createteam',
  templateUrl: './create-account-createteam.component.html',
  styleUrls: ['./create-account-createteam.component.less']
})
export class CreateAccountCreateteamComponent implements OnInit {

  constructor(
    private app: AppComponent
  ) { }

  ngOnInit() {
  }

  createTeam() {
    this.app.navigateByUrl('/address-list');
  }

}
