import React from 'react';
import { Consumer, Provider } from '../index';

const {
    describe,
    test,
    expect,
    shallow,
    render
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
            <Provider>
                <Wrapper />
            </Provider>
        ));
        expect(wrapper).toMatchSnapshot();
    });
    // test('defualt props', () => {
    //     const wrapper = shallow((
    //         <Provider userAgent={navigator.userAgent}>
    //             <Wrapper />
    //         </Provider>
    //     ));
    //     expect(wrapper).toMatchSnapshot();
    // });

    test('dynamic consumer', () => {
        const wrapper = shallow((
            <Provider>
                <Consumer render={(props) => {
                    return (
                        <Wrapper />
                    );
                }}
                />
            </Provider>
        ));
        expect(wrapper).toMatchSnapshot();
    });
    test('default consumer', () => {
        const wrapper = render((
            <Provider>
                <Consumer links={[
                    {
                        key: '1',
                        to: '1',
                        label: '1'
                    }
                ]}
                />
            </Provider>
        ));
        expect(wrapper).toMatchSnapshot();
    });
    test('methods', () => {
        const wrapper = render((
            <Provider>
                <Consumer render={(props) => {
                    props.toggle();
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
