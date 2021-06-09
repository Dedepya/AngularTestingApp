import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddnewprofileComponent } from './addnewprofile.component';

describe('AddnewmobileComponent', () => {
  let component: AddnewprofileComponent;
  let fixture: ComponentFixture<AddnewprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
