import React from 'react';
import Component from '../index';
const {
    it,
    expect,
    mount
} = global;

it('renders <Component /> component', () => {
    const wrapper = mount((
        <Component />
    ));
    expect(wrapper).toMatchSnapshot();
});
