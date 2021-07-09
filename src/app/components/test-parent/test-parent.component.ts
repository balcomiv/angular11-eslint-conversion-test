import { Component } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-test-parent',
  templateUrl: './test-parent.component.html',
  styleUrls: ['./test-parent.component.scss'],
})
export class TestParentComponent {
  anotherTestValue = true;

  control: AbstractControl | undefined;

  asyncTestValue = new Subject<boolean>();

  syncTestValue = new BehaviorSubject(true);

  constructor() {
    //  Testing async pipe
    setTimeout(() => {
      this.asyncTestValue.next(true);
    }, 2000);
  }
}
