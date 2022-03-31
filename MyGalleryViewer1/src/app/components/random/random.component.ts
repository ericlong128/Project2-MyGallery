import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Gallery } from 'src/app/models/image';

import { RandomService } from 'src/app/services/random.service'
@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})

export class RandomComponent  {
  
    
  public gallery = new Gallery('','','');
  
  

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
    .subscribe( (data)=> {
     
       this.gallery.data = data.data;
       this.gallery.config = data.config;
       this.setArt(this.gallery)
      
    
    console.log(this.gallery)
     
     
      // this.gallery = data
      
      // console.log(this.gallery);
      // this.setArt(this.gallery);
     // to take away error message
    }
      
  );
    
      // .json can only be called on a promise
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
   setArt(Gallery: Gallery ) {
    console.log(this.gallery);

    let imgUrl1 = this.gallery.config.iiif_url
    let imgUrl2 = this.gallery.data.image_id;
    
    this.gallery.imgSrc = `${imgUrl1}/${imgUrl2}/full/843,/0/default.jpg`;
    console.log(this.gallery.imgSrc);

    
  }
}

