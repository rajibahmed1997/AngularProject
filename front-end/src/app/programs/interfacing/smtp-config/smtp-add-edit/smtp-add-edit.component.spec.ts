import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmtpAddEditComponent } from './smtp-add-edit.component';

describe('SmtpAddEditComponent', () => {
  let component: SmtpAddEditComponent;
  let fixture: ComponentFixture<SmtpAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmtpAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmtpAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
