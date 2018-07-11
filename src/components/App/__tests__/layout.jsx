import React from 'react';
import Layout from '../layout';
import routes from '../../routes';

jest.mock('../../routes');

const {
    test,
    expect,
    shallow
} = global;

test('renders <Layout /> component', () => {
    const wrapper = shallow(<Layout routes={routes} />);
    // expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
});
