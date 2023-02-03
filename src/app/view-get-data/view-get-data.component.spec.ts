import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGetDataComponent } from './view-get-data.component';

describe('ViewGetDataComponent', () => {
  let component: ViewGetDataComponent;
  let fixture: ComponentFixture<ViewGetDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewGetDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewGetDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
