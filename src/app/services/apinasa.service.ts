import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApinasaService {
  private key: string = "Me8NW4fahkMZSRveR1avxsWfuqOmEqatmdoPBvnp";
  private url: string = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=" + this.key;
  private urlToPost: string = "https://testangular2-e8061.firebaseio.com/nasa.json";


  constructor(private param_service: HttpClient) { }

  getApi(): Observable<any> {
    return this.param_service.get(this.url);
  }

  postOnFirebase(json: string): Observable<any> {
    return this.param_service.post(this.urlToPost,json);
  }
}
