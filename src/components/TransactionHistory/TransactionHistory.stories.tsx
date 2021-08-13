// TODO: move to separate folder mb src/stories
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TransactionHistory from './TransactionHistory';
import { useState } from 'react';

export default {
  title: 'Components/TransactionHistory',
  component: TransactionHistory,
} as ComponentMeta<typeof TransactionHistory>;
const config = {
  apiUrl: 'https://api-stage.dex.guru',
};
const Template: ComponentStory<typeof TransactionHistory> = (args) => {
  return (
    <div style={{ position: 'relative', width: '500px', height: '600px' }}>
      <TransactionHistory {...args} />
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  config,
  tokenId: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48-eth',
  account: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
};
