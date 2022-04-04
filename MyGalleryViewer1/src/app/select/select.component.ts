import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { User, Artwork } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  userId: number = this.appComponent.otherUser.id;
  public user = new User(0, '', '', '', '', '', []);
  public artwork = new Artwork(0, 0, '', '', '', '', '', '', '', 0, 0, [this.user]);
  public artworks: Artwork[] = [];
  clientMessage: any;

  public imgSrc: any;

  title = "";
  constructor(private userService: UserService, private appComponent: AppComponent) { }

  ngOnInit(): void {
    console.log(this.userId);
    this.userService.findUserById(this.userId).subscribe(
      data =>{ this.artworks = data.artworks,
      this.title = data.username + " Gallery"
      }
      
           , () => this.clientMessage.message = `Can't find the User ${this.userId}`
    );
  }


}
