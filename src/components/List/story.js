import React from 'react';
import { storiesOf } from '@storybook/react';
import List from './List';

storiesOf('List', module)
    .add('loading false', () => (
        <List loading={false} data={[{ name: 'yuei' }]} />
    ))
    .add('loading true', () => (
        <List loading={true} data={[{ name: 'yuei' }]} />
    ));
