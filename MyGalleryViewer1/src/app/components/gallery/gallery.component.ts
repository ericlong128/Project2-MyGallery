import { UserService } from './../../services/user.service';
import { AppComponent } from 'src/app/app.component';
import { Component, OnInit } from '@angular/core';
import { ClientMessage } from 'src/app/models/client-message';
import { Gallery } from 'src/app/models/image';
import { Artwork, User } from 'src/app/models/user';
import { ArtworkService } from 'src/app/services/artwork.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  public image = new Gallery('', '', '');
  public clientMessage: ClientMessage = new ClientMessage('');
  public images: any = [];

  title = "MyGallery";

  public userId: number = this.appComponent.currentUser.id;
  public user = new User(0, '', '', '', '', '', []);
  public artwork = new Artwork(0, 0, '', '', '', '', '', '', '', 0, 0, [this.user]);
  public artworks: Artwork[] = [];;
  public imgSrc: any;

  constructor(private userService: UserService, private artworkService: ArtworkService, private appComponent: AppComponent) {

  }
  ngOnInit(): void {
    console.log("build gallery for " + this.userId);
    this.userService.findUserById(this.userId).subscribe(
      data => this.artworks = data.artworks,
      () => this.clientMessage.message = `Can't find the User ${this.userId}`
    );
  }

  public removeThisArtwork(id: number) {
    //console.log(id);
    this.artworkService.deleteArtworkById(id).subscribe(
      () => {
        console.log("artwork deleted");
        this.ngOnInit();
      }
    )
  }
}
