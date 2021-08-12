import React, { FC } from 'react';
import { useIntl } from 'react-intl';
import Button from '../Button';
import { NavbarContainer, Heading, ButtonGroup } from './Navbar.parts';
import { FilterTypes } from '../../../typings/FilterTypes';
interface NavbarProps {
  selectedFilter: FilterTypes;
  onFilterClick: (filterValue: FilterTypes) => void;
}

const Navbar: FC<NavbarProps> = ({ selectedFilter, onFilterClick }) => {
  const { formatMessage } = useIntl();
  return (
    <NavbarContainer>
      <Heading
        title={formatMessage({ id: 'TransactionHistory.Navbar.Heading' })}
      />
      <ButtonGroup>
        <Button
          title={formatMessage({
            id: 'TransactionHistory.Navbar.FilterAllTitle',
          })}
          selected={selectedFilter === FilterTypes.all}
          onClick={() => onFilterClick(FilterTypes.all)}
        />
        <Button
          title={formatMessage({
            id: 'TransactionHistory.Navbar.FilterAllTitle',
          })}
          selected={selectedFilter === FilterTypes.account}
          onClick={() => onFilterClick(FilterTypes.account)}
        />
      </ButtonGroup>
    </NavbarContainer>
  );
};

export default Navbar;