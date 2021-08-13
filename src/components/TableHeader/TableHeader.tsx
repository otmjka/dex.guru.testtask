import React, { FC } from 'react';
import { useIntl } from 'react-intl';

import {
  TableCol,
  TableRow,
} from '../TransactionHistory/TransactionHistoryRecordTableItem.parts';

import './TableHeader.scss';

const TableHeader: FC = () => {
  const { formatMessage } = useIntl();
  return (
    <TableRow className="transaction-history__tablerow_borderbottom">
      <TableCol className="transaction-history__tablecol_header">
        {formatMessage({ id: 'TransactionHistory.TableHeading.TokenAmount' })}
      </TableCol>
      <TableCol className="transaction-history__tablecol_header">
        {formatMessage({ id: 'TransactionHistory.TableHeading.TokenValue' })}
      </TableCol>
      <TableCol className="transaction-history__tablecol_header">
        {formatMessage({
          id: 'TransactionHistory.TableHeading.TransactionTime',
        })}
      </TableCol>
    </TableRow>
  );
};

export default TableHeader;
