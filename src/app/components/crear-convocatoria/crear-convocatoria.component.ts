import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { ConfirmedValidator } from '../../helpers/confirmed.validator';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-convocatoria',
  templateUrl: './crear-convocatoria.component.html',
  styleUrls: ['./crear-convocatoria.component.less']
})
export class CrearConvocatoriaComponent implements OnInit {
  convocatoria: FormGroup;
  conocimientos: any = 0;
  typesConvocatoria = ['Convocatoria de auxiliares de laboratorio..', 'Convocatoria de auxiliares de materia.']
  validation_messages = {
    'titulo': [
      { type: 'required', message: 'El titulo es requerido.' },
      { type: 'pattern', message: 'El titulo solo debe contener letras.' }
    ],
    'gestion': [
      { type: 'required', message: 'La gestion es requerida.' },
      { type: 'pattern', message: 'la gestion tiene alfanumericos.' }
    ],
    'fechainicio': [
      { type: 'required', message: 'La fecha de inicio es requerida.' },
      ],
    'fechafin': [
      { type: 'required', message: 'La fecha de finalizacion es requerida' }
    ],
    'fechapub': [
      { type: 'required', message: 'La fecha de publicacion es requerida.' },
      ],
    'fechapres': [
      { type: 'required', message: 'La fecha de presentacion es requerida.' },
      ],
    'fechapubhab': [
      { type: 'required', message: 'La fecha de publicacion de resultados es requerida.' },
    ],
    'fecharec': [
      { type: 'required', message: 'La fecha de reclamos es requerida.' },
    ],
    'fecharol': [
      { type: 'required', message: 'La fecha de publicacion del rol de pruebas es requerida.' },
    ],
    'fechapubres': [
      { type: 'required', message: 'La fecha de publicacion de resultados es requerida.' },
    ],
    'catecon': [
      { type: 'required', message: 'La categoria de la convocatoria es requerida.' },
    ],
    'pondeDocumentos': [
      { type: 'required', message: 'La ponderacion o porcentaje es requerida ' },
      { type: 'maxlength', message: 'La ponderacion o porcentaje debe contener una cifra de 0 a 99.' }
    ],
    'horarec': [
      { type: 'required', message: 'La hora de atencion a reclamos es requerida' },
      { type: 'pattern', message: 'Debe contener este formato HH:MM' }
    ],
    'lugar': [
      { type: 'required', message: 'El lugar de atencion a reclamos es requerido' }
    ]
  };

  constructor(private fb: FormBuilder, private router: Router, public firebaseService: FirebaseService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.convocatoria = this.fb.group({
      titulo: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      gestion: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      fechainicio: [{value: '', disabled: true}, Validators.required],
      fechafin: [{value: '', disabled: true}, Validators.required],
      fechapub: [{value: '', disabled: true}, Validators.required],
      fechapres: [{value: '', disabled: true}, Validators.required],
      fechapubhab: [{value: '', disabled: true}, Validators.required],
      fecharec: [{value: '', disabled: true}, Validators.required],
      fecharol: [{value: '', disabled: true}, Validators.required],
      fechapubres: [{value: '', disabled: true}, Validators.required],
      catecon: ['', [Validators.required ]],
      pondeDocumentos: ['', [Validators.required, Validators.maxLength(2), Validators.pattern('[0-9 ]*')]],
      pondeConocimientos: [this.conocimientos],
      horarec: ['', [Validators.required, Validators.pattern(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/)]],
      lugar: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      rol: ['administrador']
    });
  }

  resetFields(){
    this.convocatoria = this.fb.group({
      titulo: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      gestion: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      fechainicio: ['', [Validators.required]],
      fechafin: ['', [Validators.required]],
      fechapub: ['', Validators.required ],
      fechapres: ['', Validators.required ],
      fechapubhab: ['', Validators.required ],
      fecharec: ['', Validators.required ],
      fecharol: ['', Validators.required ],
      fechapubres: ['', Validators.required ],
      catecon: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*') ]],
      pondeDocumentos: ['', [Validators.required, Validators.maxLength(2), Validators.pattern('[0-9 ]*')]],
      pondeConocimientos: [this.conocimientos],
      horarec: ['', [Validators.required, Validators.pattern(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/)]],
      lugar: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      rol: ['administrador']
    });
    this.router.navigate(['/']);
  }

  calculateConocimiento($event) {
    console.log('entra', $event);
    this.conocimientos = 100 - $event;
  }

  onSubmit(value){
    console.log(value);
    this.firebaseService.createConvocatoria(value)
    .then(
      res => {
        this.resetFields();
        this.router.navigate(['/']);
      }
    )
  }

}