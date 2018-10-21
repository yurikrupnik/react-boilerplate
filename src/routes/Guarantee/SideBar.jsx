import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import routes from './routes';

const SideBar = () => (
    <section>
        {
            routes.getLinks().map(link => {
                return (
                    <div key={link.key}>
                        <Link to={link.to}>
                            {link.label}
                        </Link>
                    </div>
                );
            })
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
