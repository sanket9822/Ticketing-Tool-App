import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentcategeoryComponent } from './parentcategeory.component';

describe('ParentcategeoryComponent', () => {
  let component: ParentcategeoryComponent;
  let fixture: ComponentFixture<ParentcategeoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentcategeoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentcategeoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
