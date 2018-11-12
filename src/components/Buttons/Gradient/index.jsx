/* eslint-disable react/button-has-type */
import React from 'react';
// import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button/Button';
import styles from './styles.scss';

const Gradient = ({ handleClick, children }) => (
    <Button
        disableRipple
        variant="contained"
        // fullWidth
        color="primary"
        type="submit"
        onClick={handleClick}
        className={styles.button}
    >
        {children}
    </Button>
);

// GradientButton.propTypes = {
//     children: PropTypes.isRequired
// };


export default Gradient;
