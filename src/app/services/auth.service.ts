import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';


  constructor() {}

  register(userData: any): Observable<any> {
    return new Observable(observer => {
      axios.post(this.apiUrl, userData)
        .then((response:any) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error:any) => {
          observer.error(error.response.data);
        });
    });
  }
}

