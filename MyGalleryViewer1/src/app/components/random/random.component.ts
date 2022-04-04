import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ClientMessage } from 'src/app/models/client-message';
import { UserService } from 'src/app/services/user.service';




import { Gallery } from 'src/app/models/image';
import { Artwork,User} from 'src/app/models/user';

import { RandomService } from 'src/app/services/random.service'
@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})

export class RandomComponent  {

  public userId: number = 0;
  public user: User = this.appComponent.currentUser;
  public gallery = new Gallery('','','');
  public artowork = new Artwork(0,0,'','','','','','','',0,0,[this.user])
  public clientMessage: ClientMessage = new ClientMessage('');






    constructor(private RandomService: RandomService, private appComponent: AppComponent, private userService: UserService) {



     }






  random:number= 0
  clicked = false;


  public onClick() {

    const min = Math.ceil(10000);
    const max = Math.floor(69999);
    this.random =  Math.floor(Math.random() * (max - min + 1) + min);

    let idNum = this.random;
    this.RandomService.findImage(idNum)

    .subscribe( (data)=> {

       this.gallery.data = data.data;
       this.gallery.config = data.config;
       this.setArt(this.gallery);
       this.artowork.artic_id= data.data.id;
       this.artowork.artist= data.data.artist_title;
       this.artowork.date= data.data.date_display;
       this.artowork.description=data.data.thumbnail.alt_text;
       this.artowork.height=data.data.thumbnail.height;
       this.artowork.origin=data.data.place_of_origin;
       this.artowork.title=data.data.title;
       this.artowork.width=data.data.thumbnail.width;
       this.artowork.image_id=data.data.image_id;
       this.artowork.image_config=data.config.iiif_url;
    console.log(this.gallery);
    console.log(this.artowork);
    console.log(data);
    this.clientMessage.message = '';



      // this.gallery = data

      // console.log(this.gallery);
      // this.setArt(this.gallery);
     // to take away error message
    }
    , error =>{ this.clientMessage.message = `No artwork found for ID: ${idNum} please try again!`,
       this.gallery.imgSrc=''

   }


   );

      // .json can only be called on a promise `No artwork found for ID: ${idNum} please try again!`
      // it parse the body of the HTTP response into a JavaScript object


  }


  onMousedown() {
    this.clicked = true;
  }

  onMouseup() {
    this.clicked = false;
  }
  getData() {

  }

  public registerArtwork(): void {
    //this.user.artworks.push(this.artwork);
    console.log(this.artowork);
    this.RandomService.saveImage(this.artowork)
      .subscribe(data => console.log(data), error => console.log(error));
  }

  /**
   * This function takes the response data and builds the img src url.
   * imgUrl1 is the first part of the url: config.iiif_url from api
   * -- it adds: "https://www.artic.edu/iiif/2"
   * imgUrl2 is th second part: the image_id from api
   * -- unique id for each image
   * then add "/full/843,/0/default.jpg"
   * @param {
   * } data
   */

   setArt(Gallery: Gallery ) {
    console.log(this.gallery);

    let imgUrl1 = this.gallery.config.iiif_url
    let imgUrl2 = this.gallery.data.image_id;

    this.gallery.imgSrc = `${imgUrl1}/${imgUrl2}/full/843,/0/default.jpg`;
    console.log(this.gallery.imgSrc);


  }

}

