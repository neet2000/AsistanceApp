import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';
import { Asignatura } from '../models/asignatura';
import { User } from '../models/user';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { AngularFirestore } from "@angular/fire/compat/firestore";


@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  user: User;
  asignaturas: Asignatura[] = [];


  constructor(
    private barcodeScanner: BarcodeScanner,
    private router: Router,
    public DatabaseService: DatabaseService,
    private Firestore: AngularFirestore,

  ) { 

  }

  ngOnInit() {
      console.log('this.usuarios -> ', this.user);
      this.getAsignatura();
  }

getAsignatura(){
  const enlace = 'asignatura';
  this.DatabaseService.getCollectionChanges<Asignatura>(enlace).subscribe( res =>  {
      this.asignaturas = res;
  })
}
gotoScan(){
  this.router.navigate(['/lista']);
}

  gotoLista(){
    this.router.navigate(['/lista-asistencias']);
  }

  scan()
  {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      /*barcodeData es lo que lee del QR*/
      this.Firestore.collection('asignatura').doc().set({
        'asist': +1,
      },{merge: true})
    }).catch(err => {
         console.log('Error', err);
     
  })
}}
