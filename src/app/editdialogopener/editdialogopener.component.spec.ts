import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdialogopenerComponent } from './editdialogopener.component';

describe('EditdialogopenerComponent', () => {
  let component: EditdialogopenerComponent;
  let fixture: ComponentFixture<EditdialogopenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditdialogopenerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdialogopenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
