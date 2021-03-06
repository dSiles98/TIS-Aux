import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiantesListComponent } from './estudiantes-list.component';

describe('EstudiantesListComponent', () => {
  let component: EstudiantesListComponent;
  let fixture: ComponentFixture<EstudiantesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudiantesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudiantesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
