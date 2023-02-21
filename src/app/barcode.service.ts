import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { PantryItem } from './pantryItem';

@Injectable({
  providedIn: 'root',
})
export class BarcodeService {
  private url = 'http://localhost:1997/api';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  };

  constructor(private http: HttpClient) {}

  getItem(code: string): Observable<PantryItem> {
    try {
      console.log(this.url + `/${code}`)
      const temp = this.http.get<PantryItem>(this.url + `/${code}`, this.httpOptions)
      return temp
    } catch(e) {
      throw e
    }
  }
}
