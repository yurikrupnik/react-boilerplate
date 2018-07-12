import React from 'react';
import DataContainer from '../dataContainer';

const {
    describe,
    test,
    expect,
    shallow
} = global;

describe('DataContainer Component', () => {
    test('render consumer', () => {
        const wrapper = shallow(
            <DataContainer
                fetch={() => {}}
                data={[]}
                render={() => (
                    <div>
                        asd
                    </div>
                )}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('render consumer', () => {
        const wrapper = shallow(
            <DataContainer
                data={[{}]}
                fetch={() => {
                }}
                render={() => (
                    <div>
                        asd
                    </div>
                )}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
