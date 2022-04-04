import { AppComponent } from 'src/app/app.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private appComponent: AppComponent) { }
  title =`Successfully signed in as User: ${this.appComponent.currentUser.username}`
  currentUser = this.appComponent.currentUser.username;
  numOfArt = this.appComponent.currentUser.artworks.length;

  ngOnInit(): void {
  }

}
