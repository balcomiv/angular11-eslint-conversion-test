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
  @Input() set asyncTestValue(value: boolean | null) {
    if (value === null) {
      this.cachedAsyncTestValues.push('null');
    } else {
      this.cachedAsyncTestValues.push(value);
    }
  }

  @Input() set syncTestValue(value: boolean) {
    if (value === null) {
      this.cachedSyncTestValues.push('null');
    } else {
      this.cachedSyncTestValues.push(value);
    }
  }

  cachedAsyncTestValues: (boolean | string)[] = [];

  cachedSyncTestValues: (boolean | string)[] = [];
}
