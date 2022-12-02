import { Component } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
 
 
@Component({
  selector: 'app-lista',
  templateUrl: 'lista.page.html',
  styleUrls: ['lista.page.scss'],
})
export class ListaPage {
 
 
  constructor(private barcodeScanner: BarcodeScanner) {}
 
 
 
  scan()
  {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      /*barcodeData es lo que lee del QR*/
     }).catch(err => {
         console.log('Error', err);
     });
  }
}
 