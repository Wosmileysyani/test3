import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BunnerhomeComponent } from './bunnerhome.component';

describe('BunnerhomeComponent', () => {
  let component: BunnerhomeComponent;
  let fixture: ComponentFixture<BunnerhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BunnerhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BunnerhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
