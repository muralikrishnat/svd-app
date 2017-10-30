import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-style-guide',
  templateUrl: './style-guide.component.html',
  styleUrls: ['./style-guide.component.less']
})
export class StyleGuideComponent implements OnInit {

  constructor(
    private app: AppComponent
  ) { }

  ngOnInit() {
  }

  navigationTo(url, pageTrasition) {
    this.app.navigateByUrl(url, pageTrasition);
  }
}
