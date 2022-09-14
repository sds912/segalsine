import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgroBusinessComponent } from './agro-business.component';

describe('AgroBusinessComponent', () => {
  let component: AgroBusinessComponent;
  let fixture: ComponentFixture<AgroBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgroBusinessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgroBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
