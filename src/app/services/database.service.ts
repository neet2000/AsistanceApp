import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(public Firestore: AngularFirestore) {}

  createdocument<tipo>(data: tipo, enlace: string, id: string){
    const ref = this.Firestore.collection<tipo>(enlace);
    return ref.doc(id).set(data);            
  }

  deleteDocument(){


  }

  getCollectionChanges<tipo>(enlace: string): Observable<tipo[]> {
    const ref = this.Firestore.collection<tipo>(enlace);
    return ref.valueChanges();   
  }

  editDocument(){

  }

}
