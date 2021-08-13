import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IntlProvider } from 'react-intl';

import messages from '../../translations';
import { FilterTypes } from '../../typings/FilterTypes';
import { Locales } from '../../typings/Locales';

import TableHeader from './TableHeader';

export default {
  title: 'Components/TableHeader',
  component: TableHeader,
} as ComponentMeta<typeof TableHeader>;

const Template: ComponentStory<typeof TableHeader> = (args) => {
  return (
    <IntlProvider
      messages={messages[Locales.en]}
      locale={Locales.en}
      defaultLocale={Locales.en}
    >
      <TableHeader {...args} />
    </IntlProvider>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
