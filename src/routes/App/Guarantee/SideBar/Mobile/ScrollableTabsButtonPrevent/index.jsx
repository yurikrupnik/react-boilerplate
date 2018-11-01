import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
//
// const styles = theme => ({
//     root: {
//         flexGrow: 1,
//         width: '100%',
//         backgroundColor: theme.palette.background.paper,
//     },
// });

class ScrollableTabsButtonPrevent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, value) {
        this.setState({ value });
    }

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div>
                <AppBar position="static">
                    <Tabs value={value} onChange={this.handleChange} scrollable scrollButtons="off">
                        <Tab label="24/7 Customer Service" />
                        <Tab label="Lifetime Warranty" />
                        <Tab label="Free Shipping Worldwide" />
                        <Tab label="Hassle-Free Returns" />
                        <Tab label="Free Engraving" />
                        <Tab label="60-Day Free Resizing" />
                        <Tab label="Lifetime Upgrade" />
                    </Tabs>
                </AppBar>
            </div>
        );
    }
}

// ScrollableTabsButtonPrevent.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

export default ScrollableTabsButtonPrevent;
