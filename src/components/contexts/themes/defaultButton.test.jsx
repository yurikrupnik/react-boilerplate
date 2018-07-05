import React from 'react';
import DefaultButton from './defaultButton';

const {
    describe,
    it,
    expect,
    shallow
} = global;

describe('default button', () => {
    it('renders three <DefaultButton /> components', () => {
        const wrapper = shallow(<DefaultButton theme={{ foreground: '#000000', background: '#eeeeee', color: 'red' }} toggleTheme={() => {}} />);
        // expect(wrapper.length).toBe(1);
        expect(wrapper).toMatchSnapshot();
    });

    // it('render a label', () => {
    //     const wrapper = shallow(
    //         <DefaultButton />
    //     );
    //     expect(wrapper).toMatchSnapshot();
    // });
});
