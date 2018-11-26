import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import styles from './styles.scss';

class NavTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };
        // this.handleChange = this.handleChange.bind(this);
    }
    //
    // handleChange(event, value) {
    //     this.setState({ value });
    // }

    render() {
        // const { value } = this.state;

        return (
            <div className={styles.root}>
                <div className={styles.navContainer}>
                    <div className={styles.itemContainer}>
                        <a href="/topics/">
                            <img alt="" src="https://ion.r2net.com/Images/logo.svg" />
                        </a>
                    </div>
                    <div className={styles.itemContainer}>
                        engagement rings
                    </div>
                    <div className={styles.itemContainer}>
                        wedding rings
                    </div>
                    <div className={styles.itemContainer}>
                        diamonds
                    </div>
                    <div className={styles.itemContainer}>
                        gemstones
                    </div>
                    <div className={styles.itemContainer}>
                        fine jewelry
                    </div>
                    <div className={styles.itemContainer}>
                        education
                    </div>
                    <div className={styles.itemContainer}>
                        faq
                    </div>
                </div>

                {/* <AppBar position="static"> */}
                {/* <Tabs */}
                {/* value={value} */}
                {/* onChange={this.handleChange} */}
                {/* centered */}
                {/* fullWidth */}
                {/* > */}
                {/* <Tab label="engagement rings" /> */}
                {/* <Tab label="wedding rings" /> */}
                {/* <Tab label="diamonds" /> */}
                {/* <Tab label="gemstones" /> */}
                {/* <Tab label="fine jewelry" /> */}
                {/* <Tab label="education" /> */}
                {/* <Tab label="faq" /> */}
                {/* </Tabs> */}
                {/* </AppBar> */}
            </div>
        );
    }
}

export default NavTop;
