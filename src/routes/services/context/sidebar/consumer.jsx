import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './context';
import Drawer from '../../../../components/Drawer';

const SidebarDrawer = (props) => {
    const { render, open, toggle } = props;
    if (typeof render === 'function') {
        return render(props);
    }
    return (
        <Drawer style={{ width: '400px' }} toggle={toggle} open={open} render={render}>
            <div>
                links here
            </div>
        </Drawer>
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


function SidebarConsumer({ render }) {
    return (
        <Consumer>
            {(props) => {
                if (typeof render === 'function') {
                    return render(props);
                }
                return (
                    <SidebarDrawer {...props} />
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
