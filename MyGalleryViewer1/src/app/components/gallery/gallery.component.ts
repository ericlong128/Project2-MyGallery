import { Component, OnInit } from '@angular/core';
import { ClientMessage } from 'src/app/models/client-message';
import { Image } from 'src/app/models/image';
import { RandomService } from 'src/app/services/random.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  public image = new Image('','','',0,0,'','','','','','','',0,0);
  public clientMessage: ClientMessage = new ClientMessage('');
  public images: any = [];
  public numOfImages: number = 10;



    constructor(private RandomService: RandomService ) {



     }
  ngOnInit(): void {

    this.createRange(this.numOfImages);
  }





  clicked = false;


  public onClick() {

    const min = Math.ceil(10000);
    const max = Math.floor(69999);
    let random =  Math.floor(Math.random() * (max - min + 1) + min);
    let clickImage = new Image('','','',0,0,'','','','','','','',0,0);
    let idNum = random;
    this.clientMessage.message = '';
    this.RandomService.findImage(idNum)
    .subscribe( data=> {

       clickImage.data = data.data;
       clickImage.config = data.config;
       this.setArt(clickImage)
       this.clientMessage.message = '';




    },  error => this.clientMessage.message = `No Artwork by id: ${idNum}, try again!`


      // this.gallery = data

      // console.log(this.gallery);
      // this.setArt(this.gallery);
     // to take away error message
    )}



      // .json can only be called on a promise
      // it parse the body of the HTTP response into a JavaScript object




  onMousedown() {
    this.clicked = true;
  }

  onMouseup() {
    this.clicked = false;
  }
  getData() {

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
   setArt(setImage: Image ) {

    this.image = setImage;

    let imgUrl1 = setImage.config.iiif_url
    let imgUrl2 = setImage.data.image_id;

    this.image.imgSrc = `${imgUrl1}/${imgUrl2}/full/843,/0/default.jpg`;
    console.log(this.image.imgSrc);
    this.images.push(this.image)


  }
  createRange(numOfImages: Number){
     for(var i = 1; i <= numOfImages; i++){
     this.onClick();
     }
     return this.images;
  }
}
