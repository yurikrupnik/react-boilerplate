import React, { Fragment } from 'react';
import Layout from './layout';

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
    it('renders <Layout /> component', () => {
        const wrapper = shallow(<Layout routes={routes} />);
        // expect(wrapper.length).toBe(1);
        expect(wrapper).toMatchSnapshot();
    });
});
