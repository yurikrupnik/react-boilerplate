import React from 'react';
import { StaticRouter } from 'react-router-dom';
import Component from '../index';

const {
    it,
    expect,
    mount
} = global;

it('renders <Component /> component', () => {
    const wrapper = mount((
        <StaticRouter context={{}}>
            <Component />
        </StaticRouter>
    ));
    expect(wrapper).toMatchSnapshot();
});
