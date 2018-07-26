import React from 'react';
import { storiesOf, action } from '@storybook/react';
// import { action } from '@storybook/addons';
// import '../src/index.less';
// import Button from '../src/components/Button';

const Button = ({ onClick, children }) => {
    return (
        <button onClick={onClick}>{children}</button>
    );
};

storiesOf('Button', module)
    .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
    .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);