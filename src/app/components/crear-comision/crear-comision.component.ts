import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-comision',
  templateUrl: './crear-comision.component.html',
  styleUrls: ['./crear-comision.component.less']
})
export class CrearComisionComponent implements OnInit {
  comision: FormGroup;
  typesConvocatoria = ['Comision de calificacion de requerimientos.', 'Comision de calificacion de meritos.'];
  validation_messages = {
    'depa': [
      { type: 'required', message: 'El departamento es requerido.' },
      { type: 'pattern', message: 'El nombre solo deben contener letras.' }
    ],
    'tipo': [
      { type: 'required', message: 'El tipo es requerido.' }
    ]
  };

  constructor(private fb: FormBuilder, private router: Router, public firebaseService: FirebaseService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.comision = this.fb.group({
      depa: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      tipo: ['', [Validators.required]],
      miembros: [[]],
      rol: ['administrador']
    });
    /*{ 
      validator: ConfirmedValidator('password', 'confirm_password')
    }*/
  }

  resetFields(){
    this.comision = this.fb.group({
      depa: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      tipo: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      miembros: [[]],
      rol: ['administrador']
    });
    this.router.navigate(['/']);
  }

  onSubmit(value){
    console.log(value);
    this.firebaseService.createComision(value)
    .then(
      res => {
        this.resetFields();
        this.router.navigate(['']);
      }
    )
  }

}
