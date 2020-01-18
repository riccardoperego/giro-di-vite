import { Component, OnInit } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private iab: InAppBrowser) {}
  onExit: Subscription;
  inAppBroweserOptions = 'location=no,hideurlbar=yes,hidenavigationbuttons=yes';

  ngOnInit(): void {
    this.startWebSite();
  }

  startWebSite(): void {

    console.log('start website!');

    if (this.onExit) {
      this.onExit.unsubscribe();
    }

    const ref = this.iab.create(
      'https://sites.google.com/view/plg-girodivite/home',
      '_blank',
      this.inAppBroweserOptions
    );

    this.onExit = ref.on('exit').subscribe(event => {
      console.log('exit fired, relaunching the website');
      setTimeout(() => {
        this.startWebSite();
      }, 300);
      this.startWebSite();
    });
  }



}
