import React from 'react';
import users from './users/provider';
import projects from './projects/provider';

const A = ({ children }) => (
    <div>
        {children}
    </div>
);
const B = ({ children }) => (
    <div>
        {children}
    </div>
);

export default [
    users,
    projects,
    A,
    B
];
