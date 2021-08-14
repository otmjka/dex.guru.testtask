import React, { FC } from 'react';

export const NavbarContainer: FC = ({ children }) => (
  <div className="transaction-history__header__container">{children}</div>
);
export const Heading: FC<{ title: string }> = ({ title }) => (
  <div className="transaction-history__header__title">{title}</div>
);

export const ButtonGroup: FC = ({ children }) => (
  <div className="transaction-history__header__btngroup">{children}</div>
);
