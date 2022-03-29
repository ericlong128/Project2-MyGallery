import { catchError, Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { url } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';


const userUrl = url + '/users'; // now the url is pointing to http://localhost:5000/api/users/


@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  // inject ANOTHER service into this service
  constructor(private http: HttpClient) { }

  findAllUsers(): Observable<User[]> {

    return this.http.get<User[]>(userUrl, this.httpOptions).pipe(catchError(this.handleError));
  }
  registerUser(user: User): Observable<User> {

      // takes in 3 parameters: url, object in request body, options (headers)
      return this.http.post<User>(`${userUrl}/add`, user, this.httpOptions)
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
