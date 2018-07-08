import React, { Fragment } from 'react';
import App from './app';

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
    it('renders <App /> component', () => {
        const wrapper = shallow(<App routes={routes} />);
        // expect(wrapper.length).toBe(1);
        expect(wrapper).toMatchSnapshot();
    });
});
