import { Component, OnInit } from '@angular/core';
import { IonNav } from '@ionic/angular';
import { Page1Page } from '../page1/page1.page';
import { Page2Page } from '../page2/page2.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public ionNav: IonNav) { }

  ngOnInit() {
  }

  goToPage(pageNumber: number) {
    switch (pageNumber) {
      case 1:
        this.ionNav.push(Page1Page);
        break;
        case 2:
          this.ionNav.push(Page2Page);
          break;
      default:
    }
  }

}
