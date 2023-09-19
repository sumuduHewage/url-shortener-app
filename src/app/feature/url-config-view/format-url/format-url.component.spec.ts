import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatUrlComponent } from './format-url.component';

describe('FormatUrlComponent', () => {
  let component: FormatUrlComponent;
  let fixture: ComponentFixture<FormatUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormatUrlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
