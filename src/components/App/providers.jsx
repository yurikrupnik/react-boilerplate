import React, {
    Children, Fragment, cloneElement, createElement
} from 'react';
import PropTypes from 'prop-types';

const cloneElementRecursiveByCounter = (component, counter, finalChildren) => {
    let element = null;
    Children.forEach(component.props.children, (child) => {
        element = cloneElement(child, {},
            counter > 1
                ? cloneElementRecursiveByCounter(child, counter - 1, finalChildren)
                : finalChildren);
    });
    return element;
};

const cloneElementRecursively = (tree, counter, finalChildren) => cloneElement(tree, {},
    counter === 0 ? finalChildren : cloneElementRecursiveByCounter(tree, counter, finalChildren));

const Providers = ({ children, providers }) => providers.reduce(
    (acc, c, i) => cloneElementRecursively(acc, i, createElement(c, {}, children)), <Fragment />
);

Providers.propTypes = {
    children: PropTypes.element.isRequired,
    providers: PropTypes.arrayOf(PropTypes.func).isRequired
};

export default Providers;
