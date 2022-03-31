import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent {

  title='Randomly Generated Artwork!'
  constructor() { }


  // Grab the elements

public artId = document.getElementById("art-id");
public artTitle = document.getElementById("art-title");
public artImg = document.getElementById("art-img");
public artInfo = document.getElementById("art-info");
public button = document.getElementById("btn");

// add event listener to the button


/**
 * This function fetches data from the api.
 * It returns the data as a promise and and parses the response body text as JSON.
 * Produces a JavaScript object.
 * Then is calls setArt() which displays the artwork and info.
 */
// public getData() {
//   let idNum = this.artId;
//   fetch(
//     `https://api.artic.edu/api/v1/artworks/${idNum}?fields=id,title,image_id`
//   )
//     .then((response) => response.json()) // .json can only be called on a promise
//     // it parse the body of the HTTP response into a JavaScript object
//     .then(setArt());
// }

// // /**
// //  * This function takes the response data and builds the img src url.
// //  * imgUrl1 is the first part of the url: config.iiif_url from api
// //  * -- it adds: "https://www.artic.edu/iiif/2"
// //  * imgUrl2 is th second part: the image_id from api
// //  * -- unique id for each image
// //  * then add "/full/843,/0/default.jpg"
// //  * @param {
// //  * } data
// //  */
// public setArt(data) {
//   console.log(data);
//   this.artTitle.innerHTML = `Title: ${data.data.title}`;
//   let imgUrl1 = data.config.iiif_url;
//   let imgUrl2 = data.data.image_id;
//   let imgSrc = `${imgUrl1}/${imgUrl2}/full/843,/0/default.jpg`;
//   this.artImg.setAttribute("src", imgSrc);
//   // artImg.setAttribute("width", "auto");
//   // artImg.setAttribute("height", "300px");
//   console.log(imgSrc);
// }
}
