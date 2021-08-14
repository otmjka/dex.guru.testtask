import React, { FC } from 'react';

export const TransactionHistoryContent: FC = ({ children }) => (
  <div className="transaction-history__content">{children}</div>
);

export const TransactionHistoryBlockContainer: FC = ({ children }) => (
  <div className="transaction-history">{children}</div>
);
