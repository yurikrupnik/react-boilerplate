import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { Button } from '@storybook/react/demo';
import Spinner from './index';

storiesOf('List', module)
    .add('with text', () => (
        <Spinner />
    ));
