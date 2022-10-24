import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMainScreenComponent } from './login-main-screen.component';

describe('LoginMainScreenComponent', () => {
  let component: LoginMainScreenComponent;
  let fixture: ComponentFixture<LoginMainScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginMainScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginMainScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
