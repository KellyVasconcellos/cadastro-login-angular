import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeletarComponent } from './modal-deletar.component';

describe('ModalDeletarComponent', () => {
  let component: ModalDeletarComponent;
  let fixture: ComponentFixture<ModalDeletarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDeletarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDeletarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
