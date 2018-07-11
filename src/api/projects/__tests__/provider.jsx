import React from 'react';
import Provider from '../provider';
import api from '../api';
// import api from '../../api';

jest.mock('../api');

const {
    describe,
    it,
    test,
    expect,
    shallow,
    render,
    mount
} = global;

describe('users provider', () => {
    beforeEach(() => {
        // Clear all instances and calls to constructor and all methods:
        // api.mockClear();
    });
    test('renders three <Provider /> components', () => {
        const wrapper = shallow(<Provider><div>helo</div></Provider>);
        // expect(wrapper.length).toBe(1);
        expect(wrapper).toMatchSnapshot();
        const instance = wrapper.instance();
        // instance.toggleTheme();
        instance.fetch(); // todo mock for this
        expect(instance.state.data).toEqual([]);
        // console.log('api', api);

        // expect(instance.state.data).toEqual([]);
    });

    test('should dos', () => {
        const wrapper = shallow(<Provider><div>helo</div></Provider>);
        // expect(wrapper.length).toBe(1);
        // expect(wrapper).toMatchSnapshot();
        const instance = wrapper.instance();
        // instance.toggleTheme();
        // instance.fetch(); // todo mock for this
        expect(instance.state.data).toEqual([]);
    });

    test('should dos', () => {
        const wrapper = shallow(<Provider><div>helo</div></Provider>);
        // expect(wrapper.length).toBe(1);
        // expect(wrapper).toMatchSnapshot();
        const instance = wrapper.instance();
        // instance.toggleTheme();
        // expect(instance.state.loading).toBe(true);
        // instance.handleSuccess(() => {}); // todo mock for this
        const loading = instance.state.loading;
        return instance.fetch(null, () => {
            return [
                { _id: 1, name: 'asd' }
            ];
        });

        expect(instance.state.data).toEqual([]);
        expect(instance.state.loading).toBe(!loading);
        expect(api.fetch).toHaveBeenCalledTimes(1);
    });
});
