import React from 'react';
import { StaticRouter, Route } from 'react-router-dom';
import Component from '../index';

const {
    it,
    expect,
    mount
} = global;

it('renders NoMatch for Desktop', () => {
    const wrapper = mount((
        <StaticRouter context={{}}>
            <Route component={Component} />
        </StaticRouter>
    ));
    expect(wrapper).toMatchSnapshot();
});
