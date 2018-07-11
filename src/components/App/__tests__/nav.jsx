import React from 'react';
import MainNav from '../nav';
import routes from '../../routes';

jest.mock('../../routes');

const {
    test,
    expect,
    shallow
} = global;

test('renders <Nav /> component', () => {
    const wrapper = shallow(<MainNav routes={routes} />);
    // expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div').length).toBe(2);
});
