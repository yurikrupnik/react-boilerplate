import React from 'react';
import Layout from '../layout';
import routes from '../../routes';

jest.mock('../../routes');

const {
    describe,
    it,
    expect,
    shallow
} = global;

describe('app', () => {
    it('renders <Layout /> component', () => {
        const wrapper = shallow(<Layout routes={routes} />);
        // expect(wrapper.length).toBe(1);
        expect(wrapper).toMatchSnapshot();
    });
});
