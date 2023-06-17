import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMakerComponent } from './list-maker.component';

describe('ListMakerComponent', () => {
  let component: ListMakerComponent;
  let fixture: ComponentFixture<ListMakerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListMakerComponent]
    });
    fixture = TestBed.createComponent(ListMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
