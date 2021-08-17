import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ColorTriangle, { TiangleColor } from './ColorTriangle';

export default {
  title: 'Components/ColorTriangle',
  component: ColorTriangle,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ColorTriangle>;

const Template: ComponentStory<typeof ColorTriangle> = (args) => (
  <div style={{ width: '10px', height: '10px', position: 'relative' }}>
    <ColorTriangle {...args} />
  </div>
);

export const Green = Template.bind({});
Green.args = {
  color: TiangleColor.green,
};

export const Red = Template.bind({});
Red.args = {
  color: TiangleColor.red,
};
