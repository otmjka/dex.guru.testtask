// TODO: move to separate folder mb src/stories
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import transactionHistoryResponseData from '../../mockData/transactionHistoryResponseData.json';
import TransactionHistoryRecordTableItem from './TransactionHistoryRecordTableItem';
import './TransactionHistoryRecordTableItem.scss';
import messages from '../../translations';
import { Locales } from '../../typings/Locales';
import { IntlProvider } from 'react-intl';
import TableHeader from '../TableHeader';
import '../TableHeader/TableHeader.scss';

export default {
  title: 'Components/TransactionHistoryRecordTableItem',
  component: TransactionHistoryRecordTableItem,
} as ComponentMeta<typeof TransactionHistoryRecordTableItem>;

const Template: ComponentStory<typeof TransactionHistoryRecordTableItem> = (
  args,
) => {
  return (
    <IntlProvider
      messages={messages[Locales.en]}
      locale={Locales.en}
      defaultLocale={Locales.en}
    >
      <TableHeader />
      <TransactionHistoryRecordTableItem
        data={transactionHistoryResponseData.data[0]}
      />
    </IntlProvider>
  );
};

export const Primary = Template.bind({});
