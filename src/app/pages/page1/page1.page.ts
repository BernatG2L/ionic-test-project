import { Component, OnInit } from '@angular/core';
import { IonNav, IonNavLink, NavController } from '@ionic/angular';
import { Page2Page } from '../page2/page2.page';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page {

  constructor(public ionNav:IonNav) { }

  goPage2(){
    this.ionNav.push(Page2Page);
  }

}
