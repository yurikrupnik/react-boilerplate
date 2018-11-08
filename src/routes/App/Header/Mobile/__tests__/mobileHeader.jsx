import React from 'react';
import Component from '../index';
import {  } from 'react-router-dom';
import { StaticRouter } from "react-router-dom";

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
