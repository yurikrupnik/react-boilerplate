import React from 'react';
import App from '../app';
import routes from '../../routes';

jest.mock('../../routes');

const {
    describe,
    it,
    expect,
    shallow
} = global;

describe('app', () => {
    it('renders <App /> component', () => {
        const wrapper = shallow(<App routes={routes} />);
        expect(wrapper).toMatchSnapshot();
    });
});
