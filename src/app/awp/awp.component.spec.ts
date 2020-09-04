import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwpComponent } from './awp.component';

describe('AwpComponent', () => {
  let component: AwpComponent;
  let fixture: ComponentFixture<AwpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
