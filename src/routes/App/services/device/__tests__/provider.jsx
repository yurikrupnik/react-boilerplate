import React from 'react';
import { Consumer, Provider } from '../index';

const {
    describe,
    test,
    expect,
    shallow,
    render,
    navigator
} = global;

describe('Device context', () => {
    const Wrapper = () => ((
        <div>hello</div>
    ));
    test('render consumer', () => {
        const wrapper = shallow( // notice render here
            <Consumer render={() => (
                <Wrapper />
            )}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });
    test('render provider', () => {
        const wrapper = shallow((
            <Provider userAgent={navigator.userAgent}>
                <Wrapper />
            </Provider>
        ));
        expect(wrapper).toMatchSnapshot();
    });
    test('defualt props', () => {
        const wrapper = shallow((
            <Provider userAgent={navigator.userAgent}>
                <Wrapper />
            </Provider>
        ));
        expect(wrapper).toMatchSnapshot();
    });

    test('methods', () => {
        const wrapper = render((
            <Provider userAgent={navigator.userAgent}>
                <Consumer render={(props) => {
                    const { isMobile, toggle } = props;
                    toggle();
                    isMobile();
                    toggle();
                    return (
                        <Wrapper />
                    );
                }}
                />
            </Provider>
        ));
        expect(wrapper).toMatchSnapshot();
    });
});
