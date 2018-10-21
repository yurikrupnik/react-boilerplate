import React from 'react';
import { Link } from 'react-router-dom';
import Top from './Top';
// import guaranteeRoutes from '../../Guarantee/routes';
import routes from '../../index';
// const headerRoutes = guaranteeRoutes.reduce((acc, next) => {
//     if (!next.headerLabel) {
//         return acc;
//     }
//     return acc.concat({
//         label: next.headerLabel,
//         path: next.path,
//         key: next.key
//     });
// }, []);

const DesktopNav = (props) => {
    return (
        <header>
            header deskotp
            {/*<Top routes={headerRoutes} />*/}
            <div>
                <Link to="/">
                    Main
                </Link>
            </div>
            <div className="row">
                {routes.getLinks().map(route => {
                    return (
                        <div className="col-xs" key={route.key}>
                            <Link to={route.to}>
                                {route.label}
                            </Link>
                        </div>
                    );
                })}
            </div>
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
