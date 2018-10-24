import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './context';
// import MenuList from '@material-ui/core/MenuList/MenuList';
// import Input from '@material-ui/core/Input/Input';
// import MenuItem from '@material-ui/core/MenuItem/MenuItem';
// import { Route } from 'react-router-dom';
// import routes from '../ ';
// import SwipeableDrawer from '@material-ui/core/SwipeableDrawer/SwipeableDrawer';


function DeviceConsumer({ render }) {
    return (
        <Consumer>
            {props => render(props)}
        </Consumer>
    );
}

// class DeviceConsumer extends React.PureComponent {
//     render() {
//         const { render } = this.props;
//         return (
//             <Consumer>
//                 {props => render(props)}
//             </Consumer>
//         );
//     }
// }


DeviceConsumer.defaultProps = {
    render: null
};

DeviceConsumer.propTypes = {
    // routes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    render: PropTypes.func
};

export default DeviceConsumer;
