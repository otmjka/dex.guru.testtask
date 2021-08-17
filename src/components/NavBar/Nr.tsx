import React, { FC } from 'react';
import { useIntl } from 'react-intl';

import Button from '../Button';
import { FilterTypes } from '../../typings/FilterTypes';

import { NavbarContainer, Heading, ButtonGroup } from './Navbar.parts';

interface NavbarProps {
  loading: boolean;
  selectedFilter: FilterTypes;
  onFilterClick: (filterValue: FilterTypes) => void;
}

const Navbar: FC<NavbarProps> = ({
  loading,
  selectedFilter,
  onFilterClick,
}) => {
  const { formatMessage } = useIntl();
  return (
    <NavbarContainer>
      <Heading
        title={formatMessage({ id: 'TransactionHistory.Navbar.Heading' })}
      />
      <ButtonGroup>
        <Button
          testIdTitle={FilterTypes.all}
          disabled={loading}
          title={formatMessage({
            id: 'TransactionHistory.Navbar.FilterAllTitle',
          })}
          selected={selectedFilter === FilterTypes.all}
          onClick={() => onFilterClick(FilterTypes.all)}
        />
        <Button
          testIdTitle={FilterTypes.account}
          disabled={loading}
          title={formatMessage({
            id: 'TransactionHistory.Navbar.FilterAccountTitle',
          })}
          selected={selectedFilter === FilterTypes.account}
          onClick={() => onFilterClick(FilterTypes.account)}
        />
      </ButtonGroup>
    </NavbarContainer>
  );
};

export default Navbar;
