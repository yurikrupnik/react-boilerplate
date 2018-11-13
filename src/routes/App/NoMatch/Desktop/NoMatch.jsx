import React from 'react';
import PropTypes from 'prop-types';

const NoMatchDesktop = (props) => {
    const { location } = props;
    const { pathname } = location;
    return (
        <div>
            <h3>
                destop
            </h3>
            <h3>
                No match for
                <code>
                    {pathname}
                </code>
            </h3>
        </div>
    );
};

NoMatchDesktop.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string
    }).isRequired
};

export default NoMatchDesktop;
