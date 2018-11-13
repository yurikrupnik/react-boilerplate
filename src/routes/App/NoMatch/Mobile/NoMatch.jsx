import React from 'react';
import PropTypes from 'prop-types';

const NoMatchMobile = (props) => {
    const { location } = props;
    const { pathname } = location;
    return (
        <div>
            <h3>
                mobile
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

NoMatchMobile.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string
    }).isRequired
};

export default NoMatchMobile;
