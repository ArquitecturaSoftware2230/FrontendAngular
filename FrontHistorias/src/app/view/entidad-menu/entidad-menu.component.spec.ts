import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntidadMenuComponent } from './entidad-menu.component';

describe('EntidadMenuComponent', () => {
  let component: EntidadMenuComponent;
  let fixture: ComponentFixture<EntidadMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntidadMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntidadMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
