import React, { FC, useState } from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import TransactionHistory from './TransactionHistory';
import { IntlProvider } from 'react-intl';
import messages from '../../translations';
import { Locales } from '../../typings/Locales';
import { FilterTypes } from '../../typings/FilterTypes';
import transactionHistoryRecords from '../../mockData/transactionHistoryResponseData.json';

const TestComponent: FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<FilterTypes>(
    FilterTypes.all,
  );
  const args = {
    config: {
      apiUrl: 'https://api-stage.dex.guru',
    },
    tokenId: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48-eth',
    account: '0x61e1A8041186CeB8a561F6F264e8B2BB2E20e06D',
  };
  return (
    <IntlProvider
      messages={messages[Locales.en]}
      locale={Locales.en}
      defaultLocale={Locales.en}
    >
      <TransactionHistory {...args} />
      );
    </IntlProvider>
  );
};

test('TransactionHistory: all filter, 30 records', async () => {
  render(<TestComponent />);

  const rows = screen.getAllByTestId(/table-row/i);
  expect(rows.length).toBe(1);
  const allButton = screen.getByText(/All/i);
  expect(allButton).toBeInTheDocument();
  expect(allButton).toHaveClass('transaction-history__button_selected');
  const accountBtn = screen.getByTestId(/account-false/i);
  expect(accountBtn).toBeInTheDocument();
  // fireEvent.click(accountBtn);
  // await waitFor(() => screen.getByTestId(/account-true/i));
  // expect(screen.getByTestId(/account-true/i)).toHaveClass(
  // 'transaction-history__button_selected',
  // );
});
// TODO:
// loading
// error
// no items
