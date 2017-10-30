import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(
    private app:AppComponent 
  ) { }

  ngOnInit() {
  }
  navigationTo(url, pageTransiation) {
    this.app.navigateByUrl(url, pageTransiation);
  }

}
