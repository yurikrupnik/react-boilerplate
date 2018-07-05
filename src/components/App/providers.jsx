import React, {
    Children, isValidElement, Fragment, cloneElement, createElement
} from 'react';
import PropTypes from 'prop-types';

const Providers = ({ children, providers }) => {

    function createRecursive2(acc, counter, finalChildren) {
        let re;
        Children.forEach(acc.props.children, (child) => {
            re = cloneElement(child, {}, cloneElement(acc.props.children, {}, finalChildren));
        });
        return re;
    }

    function createRecursive3(acc, ind, finalChildren) {
        let re;
        Children.forEach(acc.props.children, (child) => {
            re = cloneElement(child, {}, cloneElement(child.props.children, {}, cloneElement(child.props.children.props.children, {}, finalChildren)));
            // console.log('s', s);
        });
        return re;
    }

    function req(ac, c, finalChildren) {
        let re;
        Children.forEach(ac.props.children, (child) => {
            re = cloneElement(child, {}, c > 0 ? req(child, c--, finalChildren) : finalChildren);
        });
        // console.log('c', c);
        return re;
    }
    function createRecursive(acc, counter, finalChildren) {
        console.log('counter', counter);
        return cloneElement(acc, {}, counter === 0 ? finalChildren : req(acc, counter, finalChildren));
    }

    return providers.reduce((acc, C, i, collection) => {
        let result = null;

        const finalChildren = createElement(C, {}, children);

        if (i === 0) {
            result = createRecursive(acc, i, finalChildren);
            console.log('result', result);

            result = cloneElement(acc, {}, finalChildren);
        } else if (i === 1) {
            // return acc;
            // console.log('isValidElement(acc[combined])', isValidElement(Acc.props.children));
            // result = createRecursive(acc, i, finalChildren);

            result = cloneElement(acc, {}, cloneElement(acc.props.children, {}, finalChildren));
            console.log('result', result);
        } else if (i === 2) {
            // result = createRecursive(acc, i, finalChildren);
            // console.log('result', result);

            result = cloneElement(acc, {}, cloneElement(acc.props.children, {}, cloneElement(acc.props.children.props.children, {}, finalChildren)));
            // return acc;
            // result = cloneElement(Acc, {}, createRecursive2(Acc, i, finalChildren));
        } else if (i === 3) {
            // return acc;
            result = cloneElement(acc, {}, cloneElement(acc.props.children, {}, cloneElement(acc.props.children.props.children, {}, cloneElement(acc.props.children.props.children.props.children, {}, finalChildren))));
            // result = cloneElement(Acc, {}, createRecursive3(Acc, i, finalChildren));
        }
        console.log('result', result);

        return result;
    }, <Fragment/>);
};

Providers.propTypes = {
    children: PropTypes.element.isRequired,
    providers: PropTypes.arrayOf(PropTypes.func).isRequired
};

export default Providers;
