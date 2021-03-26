import * as React from 'react';

import CallStack from './CallStack';

export default {
  title: 'Call Stack',
  component: CallStack,
  argTypes: {
    code: { control: 'text' },
    stack: { control: 'object' }
  },
};

const Template = (args) => <CallStack {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  code: `function above() {
  return middle()
}

function middle() {
  return below()
}

function below() {
  return 1
}

above()
`,
  stack: [
    { name: '(anonymous)', line: 13 },
    { name: 'above()', line: 2 },
    { name: 'middle()', line: 6 },
    { name: 'below()', line: 10 }
  ],
  steps: [
    { stack: [0], line: 13 },
    { stack: [0, 1], line: 2 },
    { stack: [0, 1, 2], line: 6 },
    { stack: [0, 1, 2, 3], line: 10 },
    { stack: [0, 1, 2, 3], line: 11 },
    { stack: [0, 1, 2], line: 7 },
    { stack: [0, 1], line: 3 },
    { stack: [0], line: 13 },
    { stack: [], line: 14 }
  ]
};
