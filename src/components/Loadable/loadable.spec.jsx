import React from 'react';
import Component, { Loading } from './index';

const {
    describe,
    it,
    expect,
    shallow,
} = global;

describe(`${Component.name}`, () => {
    it('render', () => {

        const wrapper = shallow(
            <Component />
        );
        expect(wrapper).toMatchSnapshot();
    });
    it('render loading with timeOut', () => {

        const wrapper = shallow(
            <Loading timedOut={true} />
        );
        expect(wrapper).toMatchSnapshot();
    });
    it('render loading with error', () => {
        const wrapper = shallow(
            <Loading error={{}} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('render loading with retry', () => {

        const wrapper = shallow(
            <Loading retry={() => {}} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('render loading with pastDelay', () => {

        const wrapper = shallow(
            <Loading pastDelay={true} />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
