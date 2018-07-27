import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Component from '../app';
import routes from '../../__mocks__/routes';
import { BrowserRouter } from 'react-router-dom';

storiesOf(`App`, module)
    .add('with no routes', () => (
        <BrowserRouter><Component routes={[]} /></BrowserRouter>
    ))
    .add('with 2 routes', () => (
        <BrowserRouter><Component routes={routes} /></BrowserRouter>
    ));
