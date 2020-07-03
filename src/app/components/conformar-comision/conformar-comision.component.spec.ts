import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConformarComisionComponent } from './conformar-comision.component';

describe('ConformarComisionComponent', () => {
  let component: ConformarComisionComponent;
  let fixture: ComponentFixture<ConformarComisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConformarComisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConformarComisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
