import React from 'react';
import Consumer from '../consumer';

const {
    describe,
    it,
    expect,
    render
} = global;

describe('theme provider', () => {
    it('renders three <Consumer /> components', () => {
        const wrapper = render(<Consumer />);
        expect(wrapper).toMatchSnapshot();
    });
});
