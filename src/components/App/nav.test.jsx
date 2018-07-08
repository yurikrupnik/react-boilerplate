import React, { Fragment } from 'react';
import Nav from './nav';

const {
    describe,
    it,
    expect,
    shallow
} = global;

const routes = [
    {
        path: '/',
        component: () => (
            <div>
                hello
            </div>
        ),
        key: 1
    }
];

describe('app', () => {
    it('renders <Nav /> component', () => {
        const wrapper = shallow(<Nav routes={routes} />);
        // expect(wrapper.length).toBe(1);
        expect(wrapper).toMatchSnapshot();
    });
});
