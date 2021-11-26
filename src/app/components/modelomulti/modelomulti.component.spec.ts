import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelomultiComponent } from './modelomulti.component';

describe('ModelomultiComponent', () => {
  let component: ModelomultiComponent;
  let fixture: ComponentFixture<ModelomultiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelomultiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelomultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
