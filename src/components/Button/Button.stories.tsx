import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <div
    style={{
      backgroundColor: 'orange',
      position: 'relative',
    }}
  >
    <Button
      title="green"
      onClick={() => {
        console.log('onClick');
      }}
    />
    <Button
      title="selected"
      onClick={() => {
        console.log('onClick');
      }}
      selected={true}
    />
    <Button
      title="disabled"
      onClick={() => {
        console.log('onClick');
      }}
      disabled={true}
    />
    <Button
      title="disabled/selected"
      onClick={() => {
        console.log('onClick');
      }}
      disabled={true}
      selected={true}
    />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'green',
};
