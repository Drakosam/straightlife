import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCollectionComponent } from './list-collection.component';

describe('ListItemComponent', () => {
  let component: ListCollectionComponent;
  let fixture: ComponentFixture<ListCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
