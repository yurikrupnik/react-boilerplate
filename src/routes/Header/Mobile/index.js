import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Button from '@material-ui/core/Button/Button';
import { Consumer } from '../../../components/App/sidebar';
// import { getLinks } from '../../index';

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
                            {/*{getLinks().map(r => {*/}
                                {/*return (*/}
                                    {/*<div>*/}
                                        {/*{r.key}*/}
                                    {/*</div>*/}
                                {/*);*/}
                            {/*})}*/}
                        {/*</div>*/}
                    </AppBar>
                );
            }}
            />
        );
        // return (
        //     <Consumer routes={this.props.routes} render={(sidebarProps) => {
        //         return (
        //         <AppBar position="static">
        //             <div>
        //                 <Button onClick={sidebarProps.toggle}>toggle</Button>
        //             </div>
        //         </AppBar>
        //         );
        //     }}
        //     />
        // );
    }
}

export default Mobile;
