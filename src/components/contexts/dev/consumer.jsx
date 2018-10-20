import React from 'react';
import PropTypes from 'prop-types';
import MenuList from '@material-ui/core/MenuList/MenuList';
import Input from '@material-ui/core/Input/Input';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import { Link } from 'react-router-dom';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer/SwipeableDrawer';
import { Consumer } from './context';

function DevConsumer({ render, links }) {

    return (
        <Consumer>
            {(props) => {
                if (typeof render === 'function') {
                    return render(props);
                }
                return (
                    <SwipeableDrawer
                        anchor="right"
                        open={props.open}
                        onClose={props.toggle}
                        onOpen={props.toggle}
                    >
                        <MenuList style={{ width: '300px' }}>
                            <Input placeholder="press me" fullWidth />

                            {links.map(link => (
                                <MenuItem key={link.key}>
                                    <Link onClick={props.toggle} to={link.to}>
                                        {link.label}
                                    </Link>
                                </MenuItem>
                            ))}

                        </MenuList>
                    </SwipeableDrawer>
                );
            }}
        </Consumer>
    );
}

DevConsumer.defaultProps = {
    render: null,
    link: []
};

DevConsumer.propTypes = {
    // render: PropTypes.func
    links: PropTypes.arrayOf(PropTypes.shape({}))
    // links: PropTypes.arrayOf(PropTypes.shape({
    //     label: PropTypes.string.isRequired,
    //     to: PropTypes.string.isRequired,
    //     key: PropTypes.string.isRequired
    // })),
};

export default DevConsumer;
