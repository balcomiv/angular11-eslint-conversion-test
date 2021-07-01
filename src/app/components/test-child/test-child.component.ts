import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.scss'],
})
export class TestChildComponent {
  // @Input() testInput: string | null = null;
  @Input() testInput: string = '';

  @Input() set anotherInput(value: boolean) {
    console.log('===> @Input() disabled: ', value);
  }

  testValue?: string;

  testIf?: boolean;

  constructor() {
    console.log('ctor');
  }
}
