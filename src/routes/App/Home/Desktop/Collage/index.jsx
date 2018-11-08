import React from 'react';
import styles from './styles.scss';
import PropTypes from 'prop-types';

const Collage = (props) => {
    const { text } = props;
    return (
        <h2>
            {text}
        </h2>
    );
};


// HeaderMobile.propTypes = {
//     text: PropTypes.string.isRequired
// };

export default Collage;
