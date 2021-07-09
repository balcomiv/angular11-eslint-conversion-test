import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { TestChildComponent } from '../test-child/test-child.component';
import { TestParentComponent } from './test-parent.component';

// 👇 The default export metadata controls how Storybook lists your stories and provides information used by addons.
export default {
  title: 'Test Components',
  component: TestParentComponent,
  decorators: [
    moduleMetadata({
      declarations: [TestParentComponent, TestChildComponent],
      imports: [],
    }),
  ],
} as Meta;

// 👇 We create a "template" of how args map to rendering
const template: Story<TestParentComponent> = (args: TestParentComponent) => ({
  template: `
   <app-test-parent></app-test-parent>
`,
  props: {
    ...args,
  },
});

// 👇 Each story can then reuse that template
export const generalUsage: Story<TestParentComponent> = template.bind({});
generalUsage.args = {};
