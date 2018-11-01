import React from 'react';
import Component from './List';

const {
    describe,
    it,
    expect,
    shallow,
} = global;

describe(`${Component.name}`, () => {
    it('render', () => {
        const wrapper = shallow(
            <Component data={[]} loading={true} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('render with data', () => {
        const wrapper = shallow(
            <Component
                data={[
                    {
                        _id: 'asd',
                        name: 'asd'
                    },
                    {
                        _id: 'asd',
                        name: 'asd'
                    }
                ]}
                loading={false}
            />
        );
        // expect(wrapper.length).toBe(1);
        expect(wrapper).toMatchSnapshot();
    });
});
