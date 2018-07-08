import React from 'react';
import Router from './index';

const {
    describe,
    it,
    expect,
    shallow
} = global;

describe('Router', () => {
    it('renders three <Router /> components', () => {
        const wrapper = shallow(<Router routes={[
            {
                path: '/',
                component: ()=> {
                    return (
                        <div>asd</div>
                    );
                },
                key: '1'
            }
        ]}><h2>s</h2></Router>);
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
