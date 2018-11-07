import React from 'react';
import PropTypes from 'prop-types';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer/SwipeableDrawer';
import MenuList from '@material-ui/core/MenuList/MenuList';

const Drawer = (props) => {
    const {
        open, toggle, children, style
    } = props;
    return (
        <SwipeableDrawer
            open={open}
            onClose={toggle}
            onOpen={toggle}
        >
            <MenuList style={style}>
                {children}
            </MenuList>
        </SwipeableDrawer>
    );
};

Drawer.defaultProps = {
    style: {}
};

Drawer.propTypes = {
    open: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    children: PropTypes.func.isRequired,
    style: PropTypes.shape({})
};

export default React.memo(Drawer);
