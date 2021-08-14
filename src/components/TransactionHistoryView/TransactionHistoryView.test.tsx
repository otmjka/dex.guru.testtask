import React, { FC, useState } from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import TransactionHistoryView from './TransactionHistoryView';
import { IntlProvider } from 'react-intl';
import messages from '../../translations';
import { Locales } from '../../typings/Locales';
import { FilterTypes } from '../../typings/FilterTypes';
import transactionHistoryRecords from '../../mockData/transactionHistoryResponseData.json';

const TestComponent: FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<FilterTypes>(
    FilterTypes.all,
  );
  return (
    <IntlProvider
      messages={messages[Locales.en]}
      locale={Locales.en}
      defaultLocale={Locales.en}
    >
      <TransactionHistoryView
        selectedFilter={selectedFilter}
        transactionHistoryRecords={transactionHistoryRecords.data}
        onChangeFilter={(value) => setSelectedFilter(value)}
      />
      );
    </IntlProvider>
  );
};

test('TransactionHistoryView: all filter, 30 records', async () => {
  render(<TestComponent />);

  const rows = screen.getAllByTestId(/table-row/i);
  expect(rows.length).toBe(31);
  const allButton = screen.getByText(/All/i);
  expect(allButton).toBeInTheDocument();
  expect(allButton).toHaveClass('transaction-history__button_selected');
  const accountBtn = screen.getByTestId(/account-false/i);
  expect(accountBtn).toBeInTheDocument();
  fireEvent.click(accountBtn);
  await waitFor(() => screen.getByTestId(/account-true/i));
  expect(screen.getByTestId(/account-true/i)).toHaveClass(
    'transaction-history__button_selected',
  );
});
