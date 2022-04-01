import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Image } from '../models/image';
import { Observable, catchError, throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RandomService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  // inject ANOTHER service into this service
  constructor(private http: HttpClient) { }

  findImage(id:number): Observable<Image> {
    const userUrl=`https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,image_id`

    return this.http.get<Image>(userUrl, this.httpOptions).pipe(catchError(this.handleError));
  }



  private handleError(httpError: HttpErrorResponse) {

    if (httpError.error instanceof ErrorEvent) {
      console.log('An error occured: ', httpError.error.message);
    } else {
      console.error(`Backend return code ${httpError.status} body was: ${httpError.error}`);
    }

    return throwError(() => new Error('Something really bad happened, please try again later'));
  }

}
