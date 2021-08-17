import React, { FC, useState } from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import '@testing-library/jest-dom';
import {
  render,
  screen,
  fireEvent,
  waitFor,
  getByText,
} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import TransactionHistory from './TransactionHistory';
import { IntlProvider } from 'react-intl';
import messages from '../../translations';
import { Locales } from '../../typings/Locales';
import { FilterTypes } from '../../typings/FilterTypes';
import transactionHistoryRecords from '../../mockData/transactionHistoryResponseData.json';

const args = {
  config: {
    apiUrl: '',
  },
  tokenId: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48-eth',
  account: '0x61e1A8041186CeB8a561F6F264e8B2BB2E20e06D',
};

const server = setupServer(
  rest.post(
    `${args.config.apiUrl}/v2/tokens/${args.tokenId}/swaps`,
    (req, res, ctx) => {
      return res(ctx.json(transactionHistoryRecords));
    },
  ),
);

beforeAll(() => server.listen());
// Fake timers using Jest
beforeEach(() => {
  jest.useFakeTimers();
});
afterEach(() => {
  // jest.runOnlyPendingTimers();
  jest.useRealTimers();
  server.resetHandlers();
});
afterAll(() => server.close());

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
      <TransactionHistory {...args} />
      );
    </IntlProvider>
  );
};

test('TransactionHistory: first render -> waiting for fetching data -> waiting for cooldown timer', async () => {
  const testRender = render(<TestComponent />);
  // first render
  let rows = screen.getAllByTestId(/table-row/i);
  expect(rows.length).toBe(1);
  let allButton = screen.getByTestId(/all-true-true/i);
  expect(allButton).toBeInTheDocument(); // all selected all-selected[true]-disabled[true]
  expect(allButton).toHaveClass('transaction-history__button_disabled'); // loading -> disabled buttons
  const tableHeaderTokenAmountText = screen.getByText(/Token Amount/i); // table header text
  expect(tableHeaderTokenAmountText).toBeInTheDocument();

  const noRecordsText = screen.getByText(/There are not records here/i);
  expect(noRecordsText).toBeInTheDocument(); // empty records -> has no records

  // wait for loading data
  await waitFor(() => screen.getByTestId(/all-true-false/i)); // loading false -> enabled buttons

  // animation fade-in
  let animatedBodies = screen.getAllByTestId(/animatedTableBody/i);
  expect(animatedBodies.length).toBe(2);
  expect(animatedBodies[0]).toHaveClass('transaction-history__table__body');
  expect(animatedBodies[0]).toHaveClass(
    'transaction-history__animation_fadein',
  );
  expect(animatedBodies[1]).toHaveClass('transaction-history__table__body');
  expect(animatedBodies[1]).toHaveClass(
    'transaction-history__animation_slideout',
  );
  rows = screen.getAllByTestId(/table-row/i);
  // TODO:
  // 30 records
  expect(rows.length).toBe(31);
  act(() => {
    jest.advanceTimersByTime(30000);
  });
  await waitFor(() => screen.getByTestId(/all-true-true/i));
  await waitFor(() => screen.getByTestId(/all-true-false/i));
  animatedBodies = screen.getAllByTestId(/animatedTableBody/i);
  expect(animatedBodies.length).toBe(3);
  expect(animatedBodies[0]).toHaveClass('transaction-history__table__body');
  expect(animatedBodies[0]).toHaveClass(
    'transaction-history__animation_fadein',
  );
  expect(animatedBodies[1]).toHaveClass('transaction-history__table__body');
  expect(animatedBodies[1]).toHaveClass(
    'transaction-history__animation_slideout',
  );
  rows = screen.getAllByTestId(/table-row/i);
  expect(rows.length).toBe(61);
  testRender.unmount();
});

test('TransactionHistory: waiting for fetching data -> click account filter', async () => {
  const testRender = render(<TestComponent />);
  let allButton = screen.getByTestId(/all-true-true/i);
  expect(allButton).toBeInTheDocument(); // all selected all-selected[true]-disabled[true]
  await waitFor(() => screen.getByTestId(/all-true-false/i));
  const accountBtn = screen.getByTestId(/account-false/i);
  expect(accountBtn).toBeInTheDocument();
  fireEvent.click(accountBtn);
  await waitFor(() => screen.getByTestId(/account-true-true/i));
  await waitFor(() => screen.getByTestId(/account-true-false/i));
  // animation fade-in
  let animatedBodies = screen.getAllByTestId(/animatedTableBody/i);
  expect(animatedBodies.length).toBe(3);
  testRender.unmount();
});
