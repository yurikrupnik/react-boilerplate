import React from 'react';
import Consumer from '../consumer';

const {
    describe,
    test,
    expect,
    render
} = global;

describe('projects consumer', () => {
    test('render consumer', () => {
        const wrapper = render( // notice render here
            <Consumer render={(props) => {
                const { fetch } = props;
                fetch();
                return (
                    <div>
                        asd
                    </div>
                );
            }}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
