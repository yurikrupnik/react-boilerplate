import React, { Fragment, cloneElement, createElement } from 'react';
import PropTypes from 'prop-types';
import providers from './providers';

const DataProviders = ({ children }) => providers.reduce((acc, C) => {
    if (acc.props.children) {
        // const { children } = acc.props;
        return cloneElement(
            acc, {},
            cloneElement(acc.props.children, {}, createElement(C, {}, children))
        );
    }
    return cloneElement(acc, {}, createElement(C, {}, children));
}, <Fragment />);

DataProviders.propTypes = {
    children: PropTypes.element.isRequired
};

export default DataProviders;
