import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetOverComponent } from './set-over.component';

describe('SetOverComponent', () => {
  let component: SetOverComponent;
  let fixture: ComponentFixture<SetOverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetOverComponent]
    });
    fixture = TestBed.createComponent(SetOverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
