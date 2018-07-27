import React from 'react';
import PropsTypes from 'prop-types';
import Button from '@material-ui/core/Button';

function DefaultButton(props) {
    const { onClick } = props;
    return (
        <Button
            variant="contained"
            color="primary"
            onClick={onClick}
        >
            he
        </Button>
    );
}

DefaultButton.propTypes = {
    onClick: PropsTypes.func.isRequired
};

export default DefaultButton;
