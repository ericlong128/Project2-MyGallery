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
    artic_id: number;
    image_id: string;
    image_config: string;

    title: string;
    artist: string;
    origin: string;
    date: string;
    description: string;
    width: number;
    height: number;
    owners: User[];



    //config: string;
    // id: string;

    constructor(


      id: number,
      artic_id: number,
      image_id: string,
      image_config: string,

      title: string,
      artist: string,
      origin: string,
      date: string,
      description: string,
      width: number,
      height: number,
      owners: User[]

  ) {
      this.id = id;
      this.artic_id = artic_id;
      this.image_id = image_id;
      this.image_config = image_config;
      this.title = title;
      this.artist = artist;
      this.origin = origin;
      this.date = date;
      this.description = description;
      this.width = width;
      this.height = height;
      this.owners= owners;


    }
  }