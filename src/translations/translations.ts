import { Locales } from '../typings/Locales';

const translations = {
  [Locales.en]: {
    'TransactionHistory.Navbar.Heading': 'Transaction History',
    'TransactionHistory.Navbar.FilterAllTitle': 'All',
    'TransactionHistory.Navbar.FilterAccountTitle': 'My orders',

    'TransactionHistory.TableHeading.TokenAmount': 'Token Amount',
    'TransactionHistory.TableHeading.TokenValue': 'Token Value',
    'TransactionHistory.TableHeading.TransactionTime': 'Transaction time',

    'TransactionHistory.TableContent.NoRecordsMessage':
      'There are not records here',
    'TransactionHistory.TableContent.LoadingMessage': 'Loading',
  },
};

export default translations;
