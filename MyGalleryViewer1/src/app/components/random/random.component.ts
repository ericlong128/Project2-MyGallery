import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ClientMessage } from 'src/app/models/client-message';
import { Image } from 'src/app/models/image';

import { RandomService } from 'src/app/services/random.service'
@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})

export class RandomComponent  {


  public image = new Image('','','',0,0,'','','','','','','',0,0);
  public clientMessage: ClientMessage = new ClientMessage('');



    constructor(private RandomService: RandomService ) {



     }




  random:number= 0
  clicked = false;


  public onClick() {

    const min = Math.ceil(10000);
    const max = Math.floor(69999);
    this.random =  Math.floor(Math.random() * (max - min + 1) + min);

    let idNum = this.random;
    this.RandomService.findImage(idNum)
    .subscribe( data=> {

       this.image.data = data.data;
       this.image.config = data.config;
       this.setArt(this.image)
       this.clientMessage.message = '';


    console.log(this.image)
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
   setArt(Image: Image ) {
    console.log(this.image);

    let imgUrl1 = this.image.config.iiif_url
    let imgUrl2 = this.image.data.image_id;

    this.image.imgSrc = `${imgUrl1}/${imgUrl2}/full/843,/0/default.jpg`;
    console.log(this.image.imgSrc);


  }
}

