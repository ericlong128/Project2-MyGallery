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
    

    data: any;
    imgSrc: any;
    config:any;

    //config: string;
    // id: string;

    constructor(
        data: any,
        imgSrc: any,
        config:any 
        //config: string,
        // id: string,
    ) {
        this.data = data;
        this.imgSrc = imgSrc;
        this.config = config;
        //this.config = config;
        // this.id = id;
    }

    
  //  // data: {
  //     title: any;
  //     image_id: any;
  //  // } | any;
  // // config:{ 
  //    iiif_url: any; 
  //  //      }|any;
     //  imgSrc: any;
  //   constructor(
      
  //     title: any, 
  //      image_id: any,  
  //      iiif_url: any,
   //   imgSrc: any


  // ) {
  //     this.title = title;
  //     this.image_id= image_id;
  //     this.iiif_url = iiif_url;
  //     this.imgSrc = imgSrc;

    }
  
