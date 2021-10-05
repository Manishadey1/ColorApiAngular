import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IColor } from '../interfaces/icolor';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private httpClient : HttpClient) { }

  getRandomColor(): Observable<IColor>{
    const url = "https://random-data-api.com/api/color/random_color";
   return this.httpClient.get<IColor>(url);
  }
}
