import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecaoComponenteComponent } from './selecao-componente.component';

describe('SelecaoComponenteComponent', () => {
  let component: SelecaoComponenteComponent;
  let fixture: ComponentFixture<SelecaoComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecaoComponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecaoComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
