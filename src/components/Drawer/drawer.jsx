import React from 'react';
import PropTypes from 'prop-types';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer/SwipeableDrawer';
import MenuList from '@material-ui/core/MenuList/MenuList';

const Drawer = (props) => {
    const {
        open, toggle, children, style, anchor
    } = props;
    return (
        <SwipeableDrawer
            open={open}
            onClose={toggle}
            onOpen={toggle}
            anchor={anchor}
        >
            <MenuList style={style}>
                {children}
            </MenuList>
        </SwipeableDrawer>
    );
};

Drawer.defaultProps = {
    style: {},
    anchor: 'left'
};

Drawer.propTypes = {
    open: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    children: PropTypes.func.isRequired,
    anchor: PropTypes.string,
    style: PropTypes.shape({})
};

export default React.memo(Drawer);
