import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docentes-list',
  templateUrl: './docentes-list.component.html',
  styleUrls: ['./docentes-list.component.less']
})
export class DocentesListComponent implements OnInit {
  listDocents: Array<any> = [];
  listUsers: Array<any> = [];

  constructor(private router: Router, public firebaseService: FirebaseService) { }

  getUsers() {
    this.firebaseService.getUsers()
    .subscribe(result => {
      this.listUsers = result.map(e => {
        return {
          docente: e.payload.doc.data()
        };
      })
      for(let element of this.listUsers) {
        if(element.docente.rol === 'miembro-comision') {
          this.listDocents.push(element);
        }
      }
      console.log(this.listDocents);
    })
  }

  ngOnInit() {
    this.getUsers();
  }
}
