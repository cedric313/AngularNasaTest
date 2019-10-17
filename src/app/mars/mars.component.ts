import { Component, OnInit } from '@angular/core';
import {ApinasaService} from '../services/apinasa.service';
import {NasaObject} from '../NasaObject';

@Component({
  selector: 'app-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['./mars.component.scss']
})
export class MarsComponent implements OnInit {

  constructor(private serviceApi: ApinasaService ) { }

  private nasaObject: NasaObject = new NasaObject(0,'');



  ngOnInit() {
    console.log(this.nasaObject);


  }

  getMarsPictures() {
    this.serviceApi.getApi().subscribe(data => this.nasaObject = data,
        err => console.log(err), () => console.log(Object.keys(this.nasaObject))
    );
  }

  sendPicturesToDB() {
    this.serviceApi.postOnFirebase(JSON.stringify(this.nasaObject)).subscribe(data => console.log(data));
  }

  getItemFromFirebase() {
    this.serviceApi.getDataFromFirebase().subscribe(data => this.nasaObject.deserialize(this.getFirstItemOfDict(data)),
        error => console.log("erreur on getItem"), () => console.log(this.nasaObject));
  }

  getFirstItemOfDict(json: any): any {
    let keysObject = Object.keys(json);
    let a = json[keysObject[0]];
    return a;
  }



}
