// TODO: move to separate folder mb src/stories
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import transactionHistoryResponseData from './stories/transactionHistoryResponseData.json';
import TransactionHistory from './TransactionHistory';

export default {
  title: 'Components/TransactionHistory',
  component: TransactionHistory,
} as ComponentMeta<typeof TransactionHistory>;

const Template: ComponentStory<typeof TransactionHistory> = (args) => (
  <div style={{ position: 'relative', width: '500px', height: '600px' }}>
    <TransactionHistory {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  transactionHistoryRecords: transactionHistoryResponseData.data,
};
