import { AppComponent } from 'src/app/app.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  currentUsername: string = this.appComponent.currentUser.username;

  title = 'User Portal'
  constructor(public appComponent: AppComponent) { }



}
