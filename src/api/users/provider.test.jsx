import React from 'react';
import Provider from './provider';

const {
    describe,
    it,
    expect,
    shallow,
    render,
    mount
} = global;

describe('theme provider', () => {
    it('renders three <Provider /> components', () => {
        const wrapper = render(<Provider><div>helo</div></Provider>);
        // expect(wrapper.length).toBe(1);
        expect(wrapper).toMatchSnapshot();
    });
});
