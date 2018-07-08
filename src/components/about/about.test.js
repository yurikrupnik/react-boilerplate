import React from 'react';
import About from './index';

const {
    describe,
    it,
    expect,
    shallow
} = global;

describe('theme provider', () => {
    it('renders three <About /> components', () => {
        const wrapper = shallow(<About />);
        // expect(wrapper.length).toBe(1);
        expect(wrapper).toMatchSnapshot();
    });
});
