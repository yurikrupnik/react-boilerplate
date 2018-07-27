import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Component from './index';
// import routes from '../../__mocks__/routes';
// import Component from './index';
// import {action} from '@storybook/addons';
// console.log('Main', Main);
// console.log('addons', addons);

// import '../src/index.less';
// import Button from '../src/components/Button';

// const Button = ({ onClick, children }) => {
//     return (
//         <button onClick={onClick}>{children}</button>
//     );
// };

storiesOf(`${Component.name}`, module)
    .add('with no routes', () => (
        <Component data={[]} activeTabIndex={1} routes={[]} />
    ))
    .add('with 2 routes', () => (
        <Component data={[]} activeTabIndex={0} />
    ))
