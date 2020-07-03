import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) {}

  getUser(userKey){
    return this.db.collection('users').doc(userKey).snapshotChanges();
  }

  updateUser(userKey, value){
    value.nameToSearch = value.name.toLowerCase();
    return this.db.collection('users').doc(userKey).set(value);
  }

  deleteUser(userKey){
    return this.db.collection('users').doc(userKey).delete();
  }

  getUsers(){
    return this.db.collection('users').snapshotChanges();
  }

  searchUsers(searchValue){
    return this.db.collection('users',ref => ref.where('nameToSearch', '>=', searchValue)
      .where('nameToSearch', '<=', searchValue + '\uf8ff'))
      .snapshotChanges()
  }

  searchUsersByAge(value){
    return this.db.collection('users',ref => ref.orderBy('age').startAt(value)).snapshotChanges();
  }

  createUser(value){
    console.log(value);
    return this.db.collection('users').add({
      nombres: value.nombres,
      apellidos: value.apellidos,
      codSis: value.codSis,
      telefono: value.telefono,
      correo: value.correo,
      direccion: value.direccion,
      password: value.password,
      rol: value.rol
    });
  }
  createConvocatoria(value){
    console.log(value);
    return this.db.collection('convocatorias').add({
      titulo: value.titulo,
      gestion: value.gestion,
      fechainicio: value.fechainicio,
      fechafin: value.fechafin,
      fechapub: value.fechapub,
      fechapres: value.fechapres,
      fechapubhab: value.fechapubhab,
      fecharec: value.fecharec,
      fecharol: value.fecharol,
      fechapubres: value.fechapubres,
      catecon: value.catecon,
      ponde: value.ponde,
      horarec: value.horarec,
      lugar: value.lugar,
      rol: value.rol
    });
  }

  createComision(value){
    console.log(value);
    return this.db.collection('comisiones').add({
      depa: value.depa,
      tipo: value.tipo,
      miembros: value.miembros,
      rol: value.rol
    });
  }
}
