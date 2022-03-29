export class User {
  // classes enforce behavior around how an object can be initalized
    id :number;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    email: string;
    gallery: Gallery[]; // array of Address objects;

    constructor(
      id: number,
      firstName: string,
      lastName: string,
      username: string,
      password: string,
      email: string,
      gallery: Gallery[]
  ) {
      this.id = id
      this.firstName = firstName
      this.lastName = lastName
      this.username = username
      this.password = password
      this.email = email
      this.gallery = gallery
    }

  }

  export class Gallery {

    imgUrl: string;


    constructor(
      imgUrl: string,

  ) {
      this.imgUrl = imgUrl

    }
  }
