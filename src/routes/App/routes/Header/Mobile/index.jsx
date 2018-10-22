import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Button from '@material-ui/core/Button/Button';
import { Consumer } from '../../../sidebar/index';
// import links from '../links';
// import { getLinks } from '../../index';
// import routes from '../../index';
// const mainLinks = routes.map(route => {
//     return {
//         to: route.path,
//         key: route.key,
//         label: route.label
//     };
// });
class Mobile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Consumer render={(sidebarProps) => {
                return (
                    <AppBar position="static">
                        <div>
                            <Button onClick={sidebarProps.toggle}>toggle</Button>
                        </div>
                        {/*<div>*/}
                            {/*{routes.getLinks().map(r => {*/}
                                {/*return (*/}
                                    {/*<Link to={r.to} key={r.key}>*/}
                                        {/*{r.label}*/}
                                    {/*</Link>*/}
                                {/*);*/}
                            {/*})}*/}
                        {/*</div>*/}
                    </AppBar>
                );
            }}
            />
        );
    }
}

export default Mobile;
