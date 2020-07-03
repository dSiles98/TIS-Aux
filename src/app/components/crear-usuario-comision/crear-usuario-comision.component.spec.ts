import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearUsuarioComisionComponent } from './crear-usuario-comision.component';

describe('CrearUsuarioComisionComponent', () => {
  let component: CrearUsuarioComisionComponent;
  let fixture: ComponentFixture<CrearUsuarioComisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearUsuarioComisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearUsuarioComisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
