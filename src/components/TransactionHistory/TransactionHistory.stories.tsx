// TODO: move to separate folder mb src/stories
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import transactionHistoryResponseData from './stories/transactionHistoryResponseData.json';
import transactionHistoryResponseDataMy from './stories/transactionHistoryResponseDataMy.json';
import TransactionHistory from './TransactionHistory';
import { useState } from 'react';

export default {
  title: 'Components/TransactionHistory',
  component: TransactionHistory,
} as ComponentMeta<typeof TransactionHistory>;

const Template: ComponentStory<typeof TransactionHistory> = (args) => {
  const [selectedData, setSelectedData] = useState(
    transactionHistoryResponseData.data,
  );

  return (
    <>
      <button
        onClick={() => {
          setSelectedData(
            selectedData === transactionHistoryResponseDataMy.data
              ? transactionHistoryResponseData.data
              : transactionHistoryResponseDataMy.data,
          );
        }}
      >
        toggle
      </button>
      <div style={{ position: 'relative', width: '500px', height: '600px' }}>
        <TransactionHistory transactionHistoryRecords={selectedData} />
      </div>
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  transactionHistoryRecords: transactionHistoryResponseData.data,
};
