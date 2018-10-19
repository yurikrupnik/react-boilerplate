import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Button from '@material-ui/core/Button/Button';
// import { Consumer } from '../../../components/App/sidebar';

class Mobile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('this.props', this.props);
        return (
            <AppBar position="static">
                <div>
                    <Button onClick={() => {}}>toggle</Button>
                </div>
            </AppBar>
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
