import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ClientMessage } from 'src/app/models/client-message';
import { Gallery } from 'src/app/models/image';
import { Artwork, User } from 'src/app/models/user';
import { ArtworkService } from 'src/app/services/artwork.service';
import { RandomService } from 'src/app/services/random.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-bulk-random',
  templateUrl: './bulk-random.component.html',
  styleUrls: ['./bulk-random.component.css']
})
export class BulkRandomComponent {
  public title = "Pages";

  public userId: number = 0;
  public user: User = this.appComponent.currentUser;
  public gallery = new Gallery('', '', '');
  public galleryArray: Gallery[] = [];
  public artworks: Artwork[] = [];
  public artwork = new Artwork(0, 0, '', '', '', '', '', '', '', 0, 0, [this.user])
  public clientMessage: ClientMessage = new ClientMessage('');
  public numberOfArtworks: number = 10;
  public min = Math.ceil(1);
  public max = Math.floor(10000);
  public randomPage: number = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  public pageToLoad: number = 0;
  public nextPage: number = 2;
  public prevPage: number = 0;
  public alertId: number = 0;
  public goToPage: number = 0;


  constructor(private appComponent: AppComponent, private userService: UserService, private artworkService: ArtworkService) { }

  ngOnInit(): void {
    this.listArtworks(this.randomPage);
  }

  public listArtworks(cPage: number) {
    this.artworkService.getArtworkPages(this.numberOfArtworks, cPage)
      .subscribe(data => {
        this.gallery.data = data.data;
      });
    console.log(this.gallery);
    this.pageToLoad = cPage;
    this.nextPage = cPage + 1;
    this.prevPage = cPage - 1;
    this.goToPage = this.pageToLoad;
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
