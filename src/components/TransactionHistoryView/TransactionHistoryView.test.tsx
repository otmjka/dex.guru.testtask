import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TransactionHistoryView from './TransactionHistoryView';
import { IntlProvider } from 'react-intl';
import messages from '../../translations';
import { Locales } from '../../typings/Locales';
import { FilterTypes } from '../../typings/FilterTypes';
import transactionHistoryRecords from '../../mockData/transactionHistoryResponseData.json';

test('TransactionHistoryView: all filter, 30 records', () => {
  render(
    <IntlProvider
      messages={messages[Locales.en]}
      locale={Locales.en}
      defaultLocale={Locales.en}
    >
      <TransactionHistoryView
        selectedFilter={FilterTypes.all}
        transactionHistoryRecords={transactionHistoryRecords.data}
        onChangeFilter={(value) => {}}
      />
    </IntlProvider>,
  );

  const rows = screen.getAllByTestId(/table-row/i);
  expect(rows.length).toBe(31);
  const allButton = screen.getByText(/All/i);
  expect(allButton).toBeInTheDocument();
  expect(allButton).toHaveClass('transaction-history__button_selected');
  const accountBtn = screen.getByTestId(/account-false/i);
  expect(accountBtn).toBeInTheDocument();
});
