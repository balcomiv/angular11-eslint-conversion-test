import { Component, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-test-parent',
  templateUrl: './test-parent.component.html',
  styleUrls: ['./test-parent.component.scss'],
})
export class TestParentComponent {
  test$ = of('test');

  anotherTestValue = true;

  control: AbstractControl | undefined;

  disabled = true;

  constructor() {}
}
