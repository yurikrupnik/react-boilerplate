import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MainNav extends PureComponent {
    render() {
        const { routes } = this.props;
        return (
            <header>
                <div>
                    {routes.map(route => (
                        <div key={route.key}>
                            <Link to={route.path}>
                                {route.key}
                            </Link>
                        </div>
                    ))}
                </div>
            </header>
        );
    }
}

MainNav.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default MainNav;
