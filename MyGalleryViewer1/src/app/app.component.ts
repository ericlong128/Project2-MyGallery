import { User } from './models/user';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyGalleryViewer';
  public isLoggedIn = false;

  public username: string = '';
  public id: number = 0;
  public currentUser: User = new User(0, '','','','','',[]);
  updateUserData(currentUser: User): void {
    this.currentUser = currentUser;
  }

  signOut(): void {

    window.location.reload(); //flushes the session
  }




  time = new Date();

  constructor() {
    setInterval( () => this.time = new Date(), 30000);
  }
}
