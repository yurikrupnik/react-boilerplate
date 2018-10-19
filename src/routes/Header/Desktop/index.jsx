import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import api from '../../api/auth/api';
import Top from './Top';
import routes from '../../index';
import guaranteeRoutes from '../../Guarantee/routes';
// import { getHeaderRoutes } from '../../index';

const headerRoutes = guaranteeRoutes.reduce((acc, next) => {
    if (!next.headerLabel) {
        return acc;
    }
    return acc.concat({
        label: next.headerLabel,
        path: next.path
    });
}, []);

const mainLinks = routes.map(route => {
    return {
        to: route.path,
        key: route.key,
        label: route.label
    };
});
const DesktopNav = (props) => {
    // const { routes = [] } = props;
    // console.log('routes', routes);
    console.log('props', props);

    return (
        <header>
            <Top routes={headerRoutes} />
            {mainLinks.map((route) => (
                <div key={route.key}>
                    <Link to={route.to}>
                        {route.label.toUpperCase()}
                    </Link>
                </div>
            ))}
        </header>
    );
};

DesktopNav.propTypes = {
    // routes: PropTypes.arrayOf(PropTypes.shape({
    //     key: PropTypes.string.isRequired,
    //     path: PropTypes.string.isRequired
    // })).isRequired,
};

export default DesktopNav;
