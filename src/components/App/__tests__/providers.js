import React from 'react';
import Providers from '../providers';
import ProvidersArray from '../../../api/providers';

const {
    describe,
    it,
    expect,
    shallow
} = global;

describe('providers', () => {
    it('renders three <Providers /> components', () => {
        const A = ({ children }) => (<div>{children}</div>);
        const B = ({ children }) => (<div>{children}</div>);
        const C = ({ children }) => (<div>{children}</div>);
        const wrapper = shallow(<Providers providers={[A, B, C]}><div>a</div></Providers>);
        expect(wrapper.length).toBe(1);
        expect(wrapper).toMatchSnapshot();
    });
});
