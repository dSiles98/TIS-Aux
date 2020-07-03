import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { ConfirmedValidator } from '../../helpers/confirmed.validator';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conformar-comision',
  templateUrl: './conformar-comision.component.html',
  styleUrls: ['./conformar-comision.component.less']
})
export class ConformarComisionComponent implements OnInit {
  conformar: FormGroup;
  validation_messages = {
    'depa': [
      { type: 'required', message: 'El departamento es requerido.' },
      { type: 'pattern', message: 'El nombre solo deben contener letras.' }
    ]
  };

  constructor(private fb: FormBuilder, private router: Router, public firebaseService: FirebaseService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.conformar = this.fb.group({
      depa: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      tipo: ['', [Validators.required]],
      miembros: [[]],
      rol: ['administrador']
    });
  }

  resetFields(){
    this.conformar = this.fb.group({
      depa: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      tipo: ['', [Validators.required]],
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
        this.router.navigate(['/']);
      }
    )
  }

}
