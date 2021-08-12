import React, { FC } from 'react';
import { IntlProvider } from 'react-intl';

import messages from '../../translations';
import { Locales } from '../../typings/Locales';
import { TransactionHistoryRecord } from '../../typings/TransactionHistoryRecord';

import AnimatedTableBody from './AnimatedTableBody';
import { TransactionHistoryBlockContainer } from './TransactionHistory.parts';
import './TransactionHistory.scss';

export interface TransactionHistoryProps {
  transactionHistoryRecords: Array<TransactionHistoryRecord>;
}

const TransactionHistory: FC<TransactionHistoryProps> = ({
  transactionHistoryRecords,
}) => {
  return (
    <IntlProvider
      messages={messages[Locales.en]}
      locale={Locales.en}
      defaultLocale={Locales.en}
    >
      <TransactionHistoryBlockContainer>
        <AnimatedTableBody
          transactionHistoryRecords={transactionHistoryRecords}
        />
      </TransactionHistoryBlockContainer>
    </IntlProvider>
  );
};

export default TransactionHistory;
