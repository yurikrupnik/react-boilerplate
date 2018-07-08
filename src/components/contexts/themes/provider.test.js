import React from 'react';
import Provider from './provider';
import { themes } from './context';

const {
    describe,
    it,
    expect,
    shallow,
    render
} = global;

describe('theme provider', () => {
    it('renders three <Provider /> components', () => {
        const wrapper = shallow(<Provider><div>asd</div></Provider>);
        // expect(wrapper).toMatchSnapshot();
        const instance = wrapper.instance();
        instance.toggleTheme();
        expect(instance.state.theme).toBe(themes.dark);
    });

    it('renders three <Provider /> components', () => {
        const wrapper = render(<Provider><div>asd</div></Provider>);
        expect(wrapper).toMatchSnapshot();
        // const instance = wrapper.instance();
        // instance.toggleTheme();
        // expect(instance.state.theme).toBe(themes.dark);
    });
    // it('render a label', () => {
    //     const wrapper = shallow(
    //         <DefaultButton />
    //     );
    //     expect(wrapper).toMatchSnapshot();
    // });
});
