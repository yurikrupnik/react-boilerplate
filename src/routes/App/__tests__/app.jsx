import React from 'react';
import App from '../app';
import routes from '../routes';

jest.mock('../routes'); // eslint-disable-line no-undef
const {
    it,
    expect,
    shallow,
    navigator
} = global;

it('renders <App /> component', () => {
    const wrapper = shallow(<App userAgent={navigator.userAgent} routes={routes} />);
    expect(wrapper).toMatchSnapshot();
});
