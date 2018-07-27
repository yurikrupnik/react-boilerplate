import React from 'react';
import Button from './index';

const {
    test,
    expect,
    shallow
} = global;

test('renders <Nav /> component', () => {
    const wrapper = shallow(<Button onClick={() => {}} />);
    expect(wrapper).toMatchSnapshot();
});
