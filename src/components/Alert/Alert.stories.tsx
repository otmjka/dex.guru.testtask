import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IntlProvider } from 'react-intl';

import messages from '../../translations';

import Alert from './Alert';
import { Locales } from '../../typings/Locales';
import './Alert.scss';

export default {
  title: 'Components/Alert',
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => (
  <IntlProvider
    messages={messages[Locales.en]}
    locale={Locales.en}
    defaultLocale={Locales.en}
  >
    <div
      style={{
        backgroundColor: 'black',
        position: 'relative',
        width: '500px',
        height: '600px',
      }}
    >
      <Alert
        title={
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel cum fugiat nihil reiciendis illo eaque esse cupiditate at suscipit architecto modi, porro autem est eos doloremque odio, aut enim sint.'
        }
      />
    </div>
  </IntlProvider>
);

export const Primary = Template.bind({});
Primary.args = {};
