import React, { FC } from 'react';
import { IntlProvider } from 'react-intl';

import messages from '../../translations';
import { Locales } from '../../typings/Locales';

import TransactionHistoryView from './TransactionHistoryView';
import useTransactionHistory, {
  TransactionHistoryConfig,
} from './useTransactionHistory';

export interface TransactionHistoryProps {
  config: TransactionHistoryConfig;
}

const TransactionHistory: FC<TransactionHistoryProps> = ({ config }) => {
  const { transactionHistoryRecords, selectedFilter, onChangeFilter } =
    useTransactionHistory(config);

  return (
    <IntlProvider
      messages={messages[Locales.en]}
      locale={Locales.en}
      defaultLocale={Locales.en}
    >
      <TransactionHistoryView
        selectedFilter={selectedFilter}
        transactionHistoryRecords={transactionHistoryRecords}
        onChangeFilter={onChangeFilter}
      />
    </IntlProvider>
  );
};

export default TransactionHistory;
