import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachComponentComponent } from './serach-component.component';

describe('SerachComponentComponent', () => {
  let component: SerachComponentComponent;
  let fixture: ComponentFixture<SerachComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerachComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerachComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
