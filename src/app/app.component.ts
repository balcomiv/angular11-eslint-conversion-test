import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular11-eslint-conversion-test';

  private _Nope = '';

  Another_Test = '';

  constructor() {
    console.log(this._Nope);
  }

  testSomeShit(val: unknown): void {
    const SomeValue = '';
    console.log(SomeValue);
  }
}
