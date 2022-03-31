import { url } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // add httpOptions to be sent in the post request
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  loginUrl = url + '/login';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    //make the post request to http://localhost:5000/api/login
    //payload is for the info about the user to be authenticated (claims)
    const payload = {username, password};

    //send POST request to url with payload and additonal options
    return this.http.post<any>(this.loginUrl, payload, { observe: 'response'});
  }
}
