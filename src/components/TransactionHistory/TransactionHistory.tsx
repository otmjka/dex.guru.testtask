import React, { FC } from 'react';
import { IntlProvider } from 'react-intl';
import { TransactionHistoryConfig } from '../../api/apiClient';

import messages from '../../translations';
import { Locales } from '../../typings/Locales';

import TransactionHistoryView from '../TransactionHistoryView';
import useTransactionHistory from './useTransactionHistory';
import './TransactionHistory.scss';

export interface TransactionHistoryProps {
  config: TransactionHistoryConfig;
  account: string;
  tokenId: string;
}

const TransactionHistory: FC<TransactionHistoryProps> = ({
  config,
  account,
  tokenId,
}) => {
  // TODO: no items, error, loading
  const {
    error,
    loading,
    transactionHistoryRecords,
    selectedFilter,
    onChangeFilter,
  } = useTransactionHistory({ config, account, tokenId });

  return (
    <IntlProvider
      messages={messages[Locales.en]}
      locale={Locales.en}
      defaultLocale={Locales.en}
    >
      <TransactionHistoryView
        error={error}
        loading={loading}
        selectedFilter={selectedFilter}
        transactionHistoryRecords={transactionHistoryRecords}
        onChangeFilter={onChangeFilter}
      />
    </IntlProvider>
  );
};

export default TransactionHistory;
