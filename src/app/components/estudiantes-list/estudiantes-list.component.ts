import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estudiantes-list',
  templateUrl: './estudiantes-list.component.html',
  styleUrls: ['./estudiantes-list.component.less']
})
export class EstudiantesListComponent implements OnInit {
  listStudent: Array<any> = [];
  listUsers: Array<any> = [];

  constructor(private router: Router, public firebaseService: FirebaseService) { }

  getUsers() {
    this.firebaseService.getUsers()
    .subscribe(result => {
      this.listUsers = result.map(e => {
        return {
          student: e.payload.doc.data()
        };
      })
      for(let element of this.listUsers) {
        if(element.student.rol === 'estudiante') {
          this.listStudent.push(element);
        }
      }
      console.log(this.listStudent);
    })
  }

  ngOnInit() {
    this.getUsers();
  }
   
}
