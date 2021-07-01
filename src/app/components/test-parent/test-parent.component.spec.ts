import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestChildComponent } from '../test-child/test-child.component';

import { TestParentComponent } from './test-parent.component';

describe('TestParentComponent', () => {
  let component: TestParentComponent;
  let fixture: ComponentFixture<TestParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestParentComponent, TestChildComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
