import React from 'react';
import PropTypes from 'prop-types';
import users from './users/provider';
import projects from './projects/provider';

const A = ({ children }) => (
    <div>
        {children}
    </div>
);

A.propTypes = {
    children: PropTypes.element.isRequired
};

const B = ({ children }) => (
    <div>
        {children}
    </div>
);

B.propTypes = {
    children: PropTypes.element.isRequired
};

export default [
    users,
    projects,
    A,
    B
];
