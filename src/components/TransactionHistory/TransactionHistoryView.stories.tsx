// TODO: move to separate folder mb src/stories
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import transactionHistoryResponseData from './stories/transactionHistoryResponseData.json';
import transactionHistoryResponseDataMy from './stories/transactionHistoryResponseDataMy.json';
import TransactionHistoryView from './TransactionHistoryView';
import { useState } from 'react';
import { FilterTypes } from '../../typings/FilterTypes';
import messages from '../../translations';
import { Locales } from '../../typings/Locales';
import { IntlProvider } from 'react-intl';

export default {
  title: 'Components/TransactionHistoryView',
  component: TransactionHistoryView,
} as ComponentMeta<typeof TransactionHistoryView>;

const Template: ComponentStory<typeof TransactionHistoryView> = (args) => {
  const [selectedData, setSelectedData] = useState(
    transactionHistoryResponseData.data,
  );
  const [selectedFilter, setSelectedFilter] = useState<FilterTypes>(
    FilterTypes.all,
  );
  const handleSelectedFilter = (value) => {
    setSelectedData(
      value === FilterTypes.all
        ? transactionHistoryResponseData.data
        : transactionHistoryResponseDataMy.data,
    );
    setSelectedFilter(value);
  };

  return (
    <>
      <div style={{ position: 'relative', width: '500px', height: '600px' }}>
        <IntlProvider
          messages={messages[Locales.en]}
          locale={Locales.en}
          defaultLocale={Locales.en}
        >
          <TransactionHistoryView
            selectedFilter={selectedFilter}
            onChangeFilter={handleSelectedFilter}
            transactionHistoryRecords={selectedData}
          />
        </IntlProvider>
      </div>
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  transactionHistoryRecords: transactionHistoryResponseData.data,
};
