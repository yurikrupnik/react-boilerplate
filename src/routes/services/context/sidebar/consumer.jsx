import React from 'react';
import PropTypes from 'prop-types';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer/SwipeableDrawer';
import MenuList from '@material-ui/core/MenuList/MenuList';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { Consumer } from './context';

const SidebarDrawer = (props) => {
    const { render, open, toggle } = props;
    if (typeof render === 'function') {
        return render(props);
    }
    return (
        <SwipeableDrawer
            open={open}
            onClose={toggle}
            onOpen={toggle}
        >
            <MenuList style={{ width: '400px' }}>
                <div>
                    links here
                </div>
            </MenuList>
        </SwipeableDrawer>
    );
};

SidebarDrawer.defaultProps = {
    render: null
};

SidebarDrawer.propTypes = {
    open: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    render: PropTypes.func
};

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    }
});

function SidebarConsumer({ render }) {
    return (
        <Consumer>
            {(props) => {
                if (typeof render === 'function') {
                    return render(props);
                }
                return (
                    <MuiThemeProvider theme={theme}>
                        <SidebarDrawer {...props} />
                    </MuiThemeProvider>
                );
            }}
        </Consumer>
    );
}

SidebarConsumer.defaultProps = {
    render: null
};

SidebarConsumer.propTypes = {
    render: PropTypes.func
};

export default SidebarConsumer;
