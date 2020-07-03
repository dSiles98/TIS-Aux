import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-students',
  templateUrl: './register-students.component.html',
  styleUrls: ['./register-students.component.less']
})
export class RegisterStudentsComponent implements OnInit {
  student: FormGroup;
  hide = true;
  validation_messages = {
    'nombres': [
      { type: 'required', message: 'El nombre es requerido.' },
      { type: 'pattern', message: 'Los nombres solo deben contener letras.' }
    ],
    'apellidos': [
      { type: 'required', message: 'El apellido es requerido.' },
      { type: 'pattern', message: 'Los apellidos solo deben contener letras.' }
    ],
    'correo': [
      { type: 'required', message: 'El correo es requerido.' },
      { type: 'email', message: 'El correo no se encuentra en el formato correcto.' }
    ],
    'direccion': [
      { type: 'required', message: 'La dirección es requerido.' }
    ],
    'telefono': [
      { type: 'required', message: 'El número de celular es requerido.' },
      { type: 'pattern', message: 'El número de celular solo debe contener números.' },
      { type: 'minlength', message: 'El número de celular debe contener 8 números.' }
    ],
    'codSis': [
      { type: 'required', message: 'El código SIS es requerido.' },
      { type: 'pattern', message: 'El código SIS solo debe contener números.' },
      { type: 'minlength', message: 'El código SIS debe contener 9 números.' }
    ],
    'password': [
      { type: 'required', message: 'El password es requerido.' }
    ]
  };

  constructor(private fb: FormBuilder, private router: Router, public firebaseService: FirebaseService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.student = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      nombres: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      apellidos: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      password: ['', [Validators.required]],
      direccion: ['', Validators.required ],
      codSis: ['', [Validators.required, Validators.minLength(9), Validators.pattern('[0-9 ]*')]],
      telefono: ['', [Validators.required, Validators.minLength(8), Validators.pattern('[0-9 ]*')]],
      rol: ['estudiante']
    });
  }

  resetFields(){
    this.student = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      nombres: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      apellidos: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      password: ['', [Validators.required]],
      direccion: ['', Validators.required ],
      codSis: ['', [Validators.required, Validators.minLength(9), Validators.pattern('[0-9 ]*')]],
      telefono: ['', [Validators.required, Validators.minLength(8), Validators.pattern('[0-9 ]*')]],
      rol: ['estudiante']
    });
    this.router.navigate(['/']);
  }

  onSubmit(value){
    this.firebaseService.createUser(value)
    .then(
      res => {
        this.resetFields();
        this.router.navigate(['/students']);
      }
    )
  }

}
