import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withMarkdownNotes } from '@storybook/addon-notes';
import { withTests } from '@storybook/addon-jest';
import Component from './index';
import results from '../../../jest-test-results';

storiesOf(`${Component.name}`, module)
    .addDecorator(withTests({ results }))
    .add(
        'This story shows test results from MyComponent.test.js and MyOtherComponent.test.js',
        () => <Component onClick={action('clicked')} />,
        {
            jest: ['button.test.js'],
        }
    )
    // .addDecorator(withNotes('A very simple component'))
    .add('with some emoji', withMarkdownNotes('asd')(() => <Component onClick={action('clicked')} />));
