// TODO: move to separate folder mb src/stories
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TransactionHistory from './TransactionHistory';
import { useState } from 'react';

export default {
  title: 'Components/TransactionHistory',
  component: TransactionHistory,
} as ComponentMeta<typeof TransactionHistory>;

const Template: ComponentStory<typeof TransactionHistory> = (args) => {
  return (
    <div style={{ position: 'relative', width: '500px', height: '600px' }}>
      <TransactionHistory {...args} />
    </div>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  config: {
    apiUrl: 'https://api-stage.dex.guru',
  },
  tokenId: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48-eth',
  account: '0x61e1A8041186CeB8a561F6F264e8B2BB2E20e06D',
};
