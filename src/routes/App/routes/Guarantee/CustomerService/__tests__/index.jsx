import React from 'react';
import CustomerService from '../Desktop/index';

const {
    describe,
    test,
    expect,
    shallow
} = global;

describe('CustomerService', () => {
    test('render CustomerService', () => {
        const wrapper = shallow(
            <CustomerService />
        );
        expect(wrapper).toMatchSnapshot();
        // expect(wrapper.find('div').length).toBe(1);
    });
});
