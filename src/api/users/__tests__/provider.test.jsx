import React from 'react';
import Provider from '../provider';
import api from '../api';

jest.mock('../api');

const {
    describe,
    test,
    expect,
    shallow
} = global;

describe('users provider', () => {
    test('renders three <Provider /> components', () => {
        const wrapper = shallow(<Provider><div>helo</div></Provider>);
        expect(wrapper).toMatchSnapshot();
        const instance = wrapper.instance();
        instance.fetch(); // todo mock for this
        expect(instance.state.data).toEqual([]);
    });

    test('should dos', () => {
        const wrapper = shallow(<Provider><div>helo</div></Provider>);
        const instance = wrapper.instance();expect(instance.state.data).toEqual([]);
    });

    test('should dos', () => {
        const wrapper = shallow(<Provider><div>helo</div></Provider>);
        const instance = wrapper.instance();
        const { loading } = instance.state;
        return instance.fetch(null, () => [
            { _id: 1, name: 'asd' }
        ]);

        expect(instance.state.data).toEqual([]);
        expect(instance.state.loading).toBe(!loading);
        expect(api.fetch).toHaveBeenCalledTimes(1);
    });
});
