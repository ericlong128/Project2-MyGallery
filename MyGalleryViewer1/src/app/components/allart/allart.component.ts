import { ArtworkService } from 'src/app/services/artwork.service';
import { UserService } from '../../services/user.service';
import { AppComponent } from 'src/app/app.component';
import { Component, OnInit } from '@angular/core';
import { Artwork, User } from '../../models/user';
import { Gallery } from '../../models/image';
import { ClientMessage } from '../../models/client-message';

@Component({
  selector: 'app-allart',
  templateUrl: './allart.component.html',
  styleUrls: ['./allart.component.css']
})
export class AllartComponent implements OnInit {
  public title = "Pages";

  public userId: number = 0;
  public user: User = this.appComponent.currentUser;
  public gallery = new Gallery('', '', '');
  public galleryArray: Gallery[] = [];
  public artworks: Artwork[] = [];
  public artwork = new Artwork(0, 0, '', '', '', '', '', '', '', 0, 0, [this.user])
  public clientMessage: ClientMessage = new ClientMessage('');
  public numberOfArtworks: number = 10;
  public currentPage: number = 1;
  public nextPage: number = 2;
  public prevPage: number = 0;
  public alertId: number = 0;
  public goToPage: number = 1;


  constructor(private appComponent: AppComponent, private userService: UserService, private artworkService: ArtworkService) { }

  ngOnInit(): void {
    this.listArtworks(this.currentPage);
  }

  public listArtworks(cPage: number) {
    this.artworkService.getArtworkPages(this.numberOfArtworks, cPage)
      .subscribe(data => {
        this.gallery.data = data.data;
      });
    console.log(this.gallery);
    this.currentPage = cPage;
    this.nextPage = cPage + 1;
    this.prevPage = cPage - 1;
    this.alertId = -1;
  }
  // registerThisArtwork(0, art.id, art.image_id, art.image_id, art.artist_title, art.date_display, art.thumbnail.alt_text, art.place_of_origin, art.title, art.thumbnail.width, art.thumbnail.height, this.user)
  public registerThisArtwork(artId: number, articId: number, imgId: string, artArtist: string, artDate: string, artDescription: string, artOrigin: string, artTitle: string, artW: number, artH: number, artOwner: User): void {

    this.artwork.artic_id = articId;

    this.artwork.image_id = imgId;

    this.artwork.artist = artArtist;

    this.artwork.date = artDate;

    this.artwork.description = artDescription;

    this.artwork.height = artH;

    this.artwork.origin = artOrigin;

    this.artwork.title = artTitle;

    this.artwork.width = artW;

    this.artwork.image_id = imgId;

    this.artwork.image_config = "https://www.artic.edu/iiif/2/";

    this.artwork.owners = [artOwner];


    console.log(this.artwork);



    this.artworkService.saveImage(this.artwork)
      .subscribe(
        data => {
          this.clientMessage.message = `Successfully Registered ${data.title}`;
          console.log("data.id= " + data.id);
        },
        error => console.log(error));


  }

}
