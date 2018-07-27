import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import Component from '../layout';
import routes from '../../__mocks__/routes';

storiesOf(`${Component.name}`, module)
    .add('with no routes', () => (
        <BrowserRouter><Component routes={[]} /></BrowserRouter>
    ))
    .add('with 2 routes', () => (
        <BrowserRouter><Component routes={routes} /></BrowserRouter>
    ));
