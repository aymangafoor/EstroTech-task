import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDeviceComponent } from './single-device.component';

describe('SingleDeviceComponent', () => {
  let component: SingleDeviceComponent;
  let fixture: ComponentFixture<SingleDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleDeviceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
