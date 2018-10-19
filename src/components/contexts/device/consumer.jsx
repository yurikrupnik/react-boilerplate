import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './context';
// import MenuList from '@material-ui/core/MenuList/MenuList';
// import Input from '@material-ui/core/Input/Input';
// import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import { Route } from 'react-router-dom';
import routes from '../../../routes';
// import SwipeableDrawer from '@material-ui/core/SwipeableDrawer/SwipeableDrawer';


function DeviceConsumer({ routes, render }) {
    // console.log('routes', routes);
    // console.log('render', render);

    return (
        <Consumer>
            {(props) => {
                if (typeof render === 'function') {
                    return render(props);
                } else {
                    return (
                        <Fragment>
                            {routes.map((route) => {
                                const { component, sidebar, main } = route;
                                let con, side, ma;
                                if (Array.isArray(component)) {
                                    con = props.isMobile() ? component[0] : component[1];
                                } else {
                                    con = component;
                                }

                                if (Array.isArray(sidebar)) {
                                    side = props.isMobile() ? component[0] : component[1];
                                } else {
                                    side = sidebar;
                                }

                                if (Array.isArray(main)) {
                                    ma = props.isMobile() ? component[0] : component[1];
                                } else {
                                    ma = main;
                                }
                                return (
                                    <Route
                                        component={con}
                                        key={route.key}
                                        exact={route.exact}
                                        path={route.path}
                                        main={ma}
                                        sidebar={side}
                                    />
                                );
                            })}
                        </Fragment>
                    );
                }
            }}
        </Consumer>
    );
}

DeviceConsumer.defaultProps = {
    render: null
};

DeviceConsumer.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    render: PropTypes.func
};

export default DeviceConsumer;
