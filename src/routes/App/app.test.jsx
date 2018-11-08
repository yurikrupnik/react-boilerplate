
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import App from './app';

const {
    it,
    expect,
    mount
} = global;

const desk = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36'
// const mobile = 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Mobile Safari/537.36'

it('renders <App /> component', () => {
    const wrapper = mount((
        <StaticRouter context={{}}>
            <App userAgent={desk} />
        </StaticRouter>
    ));
    expect(wrapper).toMatchSnapshot();
});

// it('renders <App /> component', () => {
//     const wrapper = mount((
//         <StaticRouter context={{}}>
//             <App userAgent={mobile} />
//         </StaticRouter>
//     ));
//     expect(wrapper).toMatchSnapshot();
// });
