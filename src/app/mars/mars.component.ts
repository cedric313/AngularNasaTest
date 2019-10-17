import { Component, OnInit } from '@angular/core';
import {ApinasaService} from '../services/apinasa.service';
import {NasaObject} from '../NasaObject';
import {stringify} from 'querystring';

@Component({
  selector: 'app-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['./mars.component.scss']
})
export class MarsComponent implements OnInit {

  constructor(private serviceApi: ApinasaService ) { }

  private nasaObject: NasaObject = new NasaObject(0);
  private arrayFromDb: Array<any>;
  private id: number;


  ngOnInit() {
    console.log(this.arrayFromDb);

  }

  getMarsPictures() {
    this.serviceApi.getApi().subscribe(data => this.arrayFromDb = data,
        err => console.log(err),() => console.log('api chargée')
    );
  }

  sendPicturesToDB() {
    this.serviceApi.postOnFirebase(JSON.stringify(this.arrayFromDb)).subscribe(data => console.log(data));
  }

}
