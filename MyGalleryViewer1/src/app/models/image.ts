export class Image {


  data: any;
  imgSrc: any;
  config:any;
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
      data: any,
      imgSrc: any,
      config:any,
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
      //config: string,
      // id: string,
  ) {
      this.data = data;
      this.imgSrc = imgSrc;
      this.config = config;
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
      //this.config = config;
      // this.id = id;
  }
}
