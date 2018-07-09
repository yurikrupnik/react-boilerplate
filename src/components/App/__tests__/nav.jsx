import React from 'react';
import Nav from '../nav';
import routes from '../../routes';

jest.mock('../../routes');

const {
    describe,
    it,
    expect,
    shallow
} = global;

it('renders <Nav /> component', () => {
    const wrapper = shallow(<Nav routes={routes} />);
    // expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
});
