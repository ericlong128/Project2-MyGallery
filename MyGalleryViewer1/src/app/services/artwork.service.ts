import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { url } from 'src/environments/environment';
import { Gallery } from '../models/image';
import { Artwork } from '../models/user';


const artworkUrl = url + '/artworks'; // now the url is pointing to http://localhost:5000/api/artworks/

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  getArtworkPages(artworksPerPage: number, currPage: number): Observable<Gallery> {
    const pagesUrl = `https://api.artic.edu/api/v1/artworks?page=${currPage}&limit=${artworksPerPage}`;
    return this.http.get<Gallery>(pagesUrl, this.httpOptions).pipe(catchError(this.handleError));
  }

  deleteArtworkById(id: number): Observable<void> {
    return this.http.delete<void>(`${artworkUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  saveImage(artwork: Artwork): Observable<Artwork> {

    return this.http.post<Artwork>(`${url}/artworks/add`, artwork, this.httpOptions)
      .pipe(catchError(this.handleError)); // pass a callback function if something goes wrong
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
