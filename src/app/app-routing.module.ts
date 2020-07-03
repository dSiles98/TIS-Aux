import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterStudentsComponent } from './components/register-students/register-students.component';
import { CrearConvocatoriaComponent } from './components/crear-convocatoria/crear-convocatoria.component';
import { CrearUsuarioComisionComponent } from './components/crear-usuario-comision/crear-usuario-comision.component';
import { EstudiantesListComponent } from './components/estudiantes-list/estudiantes-list.component';
import { DocentesListComponent } from './components/docentes-list/docentes-list.component';
import { ConformarComisionComponent } from './components/conformar-comision/conformar-comision.component';
import { CrearComisionComponent } from './components/crear-comision/crear-comision.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register-student', component: RegisterStudentsComponent },
  { path: 'register-professor', component: CrearUsuarioComisionComponent },
  { path: 'crear-convocatoria', component: CrearConvocatoriaComponent},
  { path: 'students', component: EstudiantesListComponent },
  { path: 'docentes', component: DocentesListComponent },
  { path: 'conformar-comision', component: ConformarComisionComponent },
  { path: 'crear-comision', component: CrearComisionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
