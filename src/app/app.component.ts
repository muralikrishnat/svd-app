import { Component } from '@angular/core';
import { trigger, animate, style, group, query, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [
    trigger('routerTransition', [
      transition('* => slideup', [
        query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
        group([
          query(':enter', [style({ transform: 'translateY(500px)' }), animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
          ], { optional: true }),
          query(':leave', [style({ transform: 'translateY(0%)' }), animate('0.5s ease-in-out', style({ transform: 'translateY(-100%)' }))
          ], { optional: true })
        ])
      ])
    ])
  ]
})
export class AppComponent {
  title = 'app';
  pageTransition = '';
  getState(outlet) {
    return this.pageTransition;
  }

  routerTransitionDone($event) {
    this.pageTransition = '';
  }
}
