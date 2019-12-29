import { Component, OnInit } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  inAppBroweserOptions: InAppBrowserOptions | string;
  constructor(private iab: InAppBrowser) {}

  ngOnInit(): void {
    this.inAppBroweserOptions = 'location=no,hideurlbar=yes,hidenavigationbuttons=yes';
  }

  ionViewDidEnter(): void {
    this.iab.create(
      'https://sites.google.com/view/plg-girodivite/home',
      '_self',
      this.inAppBroweserOptions
    );
    console.log('did enter!');

  }

}
