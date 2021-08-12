import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IntlProvider } from 'react-intl';

import messages from '../../translations';
import { FilterTypes } from '../../typings/FilterTypes';
import { Locales } from '../../typings/Locales';

import Navbar from './Navbar';

export default {
  title: 'Components/Navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => {
  return (
    <IntlProvider
      messages={messages[Locales.en]}
      locale={Locales.en}
      defaultLocale={Locales.en}
    >
      <Navbar {...args} />
    </IntlProvider>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  selectedFilter: FilterTypes.all,
  onFilterClick: (filterValue) => {
    console.log(filterValue);
  },
};
