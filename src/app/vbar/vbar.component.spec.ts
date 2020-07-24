import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VbarComponent } from './vbar.component';

describe('VbarComponent', () => {
  let component: VbarComponent;
  let fixture: ComponentFixture<VbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
