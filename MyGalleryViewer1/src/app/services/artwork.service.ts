import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { url } from 'src/environments/environment';


const artworkUrl = url + '/artworks'; // now the url is pointing to http://localhost:5000/api/artworks/

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {

  constructor(private http: HttpClient) { }

  deleteArtworkById(id: number): Observable<void> {
    return this.http.delete<void>(`${artworkUrl}/${id}`)
      .pipe(catchError(this.handleError));
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
