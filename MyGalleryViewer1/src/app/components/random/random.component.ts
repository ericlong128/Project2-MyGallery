import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { RandomService } from 'src/app/services/random.service'
@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})

export class RandomComponent  {
    
  
  
  

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
    .subscribe( this.setArt)
    // fetch(
    //   `https://api.artic.edu/api/v1/artworks/${idNum}?fields=id,title,image_id`
    // )
    //   .then((response) => response.json()) // .json can only be called on a promise
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
   setArt(data: { data: { title: any; image_id: any; }; config: { iiif_url: any; }; }) {
    console.log(data);

    let imgUrl1 = data.config.iiif_url;
    let imgUrl2 = data.data.image_id;
     this.imgSrc = `${imgUrl1}/${imgUrl2}/full/843,/0/default.jpg`;
    console.log(this.imgSrc);

    
  }
}



