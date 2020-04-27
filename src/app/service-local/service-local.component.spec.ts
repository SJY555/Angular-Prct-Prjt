import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceLocalComponent } from './service-local.component';

describe('ServiceLocalComponent', () => {
  let component: ServiceLocalComponent;
  let fixture: ComponentFixture<ServiceLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
