import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import Tabs from './index';
// import Component from './index';
// import {action} from '@storybook/addons';
// console.log('Main', Main);
// console.log('addons', addons);

// import '../src/index.less';
// import Button from '../src/components/Button';

const Button = ({ onClick, children }) => {
    return (
        <button onClick={onClick}>{children}</button>
    );
};

storiesOf('Button', module)
    .add('with text', () => (
        <Button onClick={action('clicked')}>Hello Button</Button>
    ))
    .add('with some emoji', () => (
        <Button onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
    ));
