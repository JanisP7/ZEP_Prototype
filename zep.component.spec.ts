import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZepComponent } from './zep.component';

describe('ZepComponent', () => {
  let component: ZepComponent;
  let fixture: ComponentFixture<ZepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
