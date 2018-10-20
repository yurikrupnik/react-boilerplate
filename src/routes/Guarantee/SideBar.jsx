import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import routes from './routes';

const SideBar = () => (
    <section>
        <h2>education side bar</h2>
        {
            // routes.getLinks().map(link => {
            //     return (
            //         <Link key={link.key} to={link.to}>
            //             {link.label}
            //         </Link>
            //     );
            // });
            routes.reduce((acc, route) => {
                if (!route.label) {
                    return acc;
                }
                return acc.concat((
                    <div key={route.key}>
                        <Link to={route.path}>
                            {route.label}
                        </Link>
                    </div>
                ));
            }, [])
        }
    </section>
);

SideBar.propTypes = {
    // routes: PropTypes.arrayOf(PropTypes.shape({
    //     key: PropTypes.string.isRequired,
    //     path: PropTypes.string.isRequired
    // })).isRequired
};

export default SideBar;
