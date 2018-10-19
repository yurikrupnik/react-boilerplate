import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import routes from '../../routes';

const Main = (props) => {
    return (
        <div>
            <h1>education center desktop</h1>
            {
                routes.map(route => (
                    <Link style={{color: 'red'}} key={route.key} to={route.path}>
                        {route.label}
                    </Link>
                ))
            }
        </div>
    );
};

// Main.propTypes = {
//     routes: PropTypes.arrayOf(PropTypes.shape({
//         key: PropTypes.string.isRequired,
//         path: PropTypes.string.isRequired
//     })).isRequired
// };

export default Main;
