import { Component } from '@angular/core';
import { HomePage } from './pages/home/home.page';
import { Location } from '@angular/common';
import { Router, Event, ResolveEnd, NavigationStart } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  rootPage: any = HomePage;
  ionNavActivated = false;

  constructor(public router: Router) {

    let subscription = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        if(event.url == "/"){
          this.ionNavActivated = true;
        }
      }
      subscription.unsubscribe();
    })

  }

}
