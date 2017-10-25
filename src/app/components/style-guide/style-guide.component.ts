import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-style-guide',
  templateUrl: './style-guide.component.html',
  styleUrls: ['./style-guide.component.less']
})
export class StyleGuideComponent implements OnInit {

  constructor(
    private router: Router,
    private app: AppComponent
  ) { }

  ngOnInit() {
  }

  navigationTo(url) {
    this.app.pageTransition = 'slideup';
    this.router.navigateByUrl(url);
  }
}
