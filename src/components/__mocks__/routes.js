import React from 'react';

const routes = [
    {
        path: '/hello',
        component: () => (
            <div>
                hello
            </div>
        ),
        key: 'hello'
    },
    {
        path: '/world',
        component: () => (
            <div>
                world
            </div>
        ),
        key: 'world'
    }
];

export default routes;
