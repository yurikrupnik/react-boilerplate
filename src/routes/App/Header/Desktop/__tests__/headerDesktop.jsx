import React from 'react';
import { StaticRouter } from 'react-router-dom';
import Component from '../index';

const {
    it,
    expect,
    mount
} = global;

it('renders Header for Desktop', () => {
    const wrapper = mount((
        <StaticRouter context={{}}>
            <Component />
        </StaticRouter>
    ));
    expect(wrapper).toMatchSnapshot();
});
