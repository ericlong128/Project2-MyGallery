export class User {
  // classes enforce behavior around how an object can be initalized
    id :number;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    email: string;
    artworks: Artwork[]; // array of Address objects;

    constructor(
      id: number,
      firstName: string,
      lastName: string,
      username: string,
      password: string,
      email: string,
      artworks: Artwork[]
  ) {
      this.id = id
      this.firstName = firstName
      this.lastName = lastName
      this.username = username
      this.password = password
      this.email = email
      this.artworks = artworks
    }

  }

 
  
  export class Artwork {
    id: number;
    articId: number;
    imageId: string;
    imageConfig: string;

    title: string;
    artist: string;
    origin: string;
    date: string;
    description: string;
    width: number;
    height: number;


    //config: string;
    // id: string;

    constructor(


      id: number,
      articId: number,
      imageId: string,
      imageConfig: string,

      title: string,
      artist: string,
      origin: string,
      date: string,
      description: string,
      width: number,
      height: number
  ) {
      this.id = id;
      this.articId = articId;
      this.imageId = imageId;
      this.imageConfig = imageConfig;
      this.title = title;
      this.artist = artist;
      this.origin = origin;
      this.date = date;
      this.description = description;
      this.width = width;
      this.height = height;


    }
  
