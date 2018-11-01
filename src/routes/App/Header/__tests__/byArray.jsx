import React from 'react';
import { StaticRouter } from 'react-router-dom';
import components from '../index';

const {
    it,
    expect
} = global;

it('renders desktop header component', () => {
    components.forEach(c => {
        expect(typeof c).toBe('function');
    })
});

it('renders array of Components 0', () => {
    const A = components[0];
    const wrapper = mount((
        <StaticRouter context={{}}>
            <A />
        </StaticRouter>
    ));
    expect(wrapper).toMatchSnapshot();
});

it('renders array of Components 1', () => {
    const A = components[1];
    const wrapper = mount((
        <StaticRouter context={{}}>
            <A />
        </StaticRouter>
    ));
    expect(wrapper).toMatchSnapshot();
});
