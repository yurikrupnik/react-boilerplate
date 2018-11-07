
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import App from './app';

const {
    it,
    expect,
    shallow,
    render,
    mount
} = global;


it('renders <App /> component', () => {
    const wrapper = render((
        <StaticRouter context={{}}>
            <App userAgent={global.navigator.userAgent} />
        </StaticRouter>
    ));
    expect(wrapper).toMatchSnapshot();
});
