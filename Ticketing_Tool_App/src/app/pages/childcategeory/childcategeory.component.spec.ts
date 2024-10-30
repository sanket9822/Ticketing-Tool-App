import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildcategeoryComponent } from './childcategeory.component';

describe('ChildcategeoryComponent', () => {
  let component: ChildcategeoryComponent;
  let fixture: ComponentFixture<ChildcategeoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildcategeoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildcategeoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
