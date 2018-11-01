import { createElement } from 'react';
import PropTypes from 'prop-types';
import has from 'lodash/has';

const Providers = ({ children, providers, context }) => providers
    .reduceRight((acc, c) => {
        const providerName = typeof c.provider === 'function' && c.provider();
        if (has(context, providerName)) {
            return createElement(c, { initData: context[providerName] }, acc);
        }
        return createElement(c, {}, acc);
    }, children);

Providers.propTypes = {
    children: PropTypes.element.isRequired,
    providers: PropTypes.arrayOf(PropTypes.func).isRequired
};

export default Providers;
