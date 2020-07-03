import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { FirebaseService } from './services/firebase.service';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule,
         MatMenuModule,
         MatTableModule,
         MatDividerModule,
         MatProgressSpinnerModule,
         MatSlideToggleModule,
         MatOptionModule} from '@angular/material';

//components
import { RegisterStudentsComponent } from './components/register-students/register-students.component';
import { CrearConvocatoriaComponent } from './components/crear-convocatoria/crear-convocatoria.component';
import { ConformarComisionComponent } from './components/conformar-comision/conformar-comision.component';
import { CrearUsuarioComisionComponent } from './components/crear-usuario-comision/crear-usuario-comision.component';
import { EstudiantesListComponent } from './components/estudiantes-list/estudiantes-list.component';
import { DocentesListComponent } from './components/docentes-list/docentes-list.component';
import { CrearComisionComponent } from './components/crear-comision/crear-comision.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterStudentsComponent,
    CrearConvocatoriaComponent,
    ConformarComisionComponent,
    CrearUsuarioComisionComponent,
    EstudiantesListComponent,
    DocentesListComponent,
    CrearComisionComponent,
    HomeComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatListModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatMenuModule,
    MatTableModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatOptionModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
