import React from 'react';
// import Consumer from './consumer';
import { Context, Provider, Consumer } from './context';
// import Provider from './provider';
// import Button from './defaultButton';

const {
    describe,
    it,
    expect,
    shallow,
    render,
    mount
} = global;[]

describe('theme provider', () => {
    it('renders three <Povider /> components', () => {
        // const fn = jest.fn();
        const wrapper = render(<Provider />);
        expect(wrapper).toMatchSnapshot();
    });

    // it('render a label', () => {
    //     const wrapper = shallow(
    //         <DefaultButton />
    //     );
    //     expect(wrapper).toMatchSnapshot();
    // });
});
