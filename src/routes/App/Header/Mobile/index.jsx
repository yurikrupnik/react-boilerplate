import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Button from '@material-ui/core/Button/Button';
import { Consumer } from '../../../services/context/sidebar/index';
import routes from '../../routes';


const Mobile = () => (
    <Consumer render={sidebarProps => (
        <AppBar position="static">
            <div>
                <Button onClick={sidebarProps.toggle}>toggle</Button>
            </div>
            <div>
                {routes.getLinks().map(r => (
                    <Link to={r.to} key={r.key}>
                        {r.label}
                    </Link>
                ))}
            </div>
        </AppBar>
    )}
    />
);

export default Mobile;
