import React from 'react';
import { Link } from 'react-router-dom';
import uniqid from 'uniqid';
import Consumer from '../../../../api/currency/context/consumer';
import styles from './styles.scss';
import NavTop from './NavTop';


export default class DesktopNav extends React.Component {
    render() {
        const links = [
            {
                label: 'guarantee',
                key: uniqid(),
                to: '/guarantee'
            },
            {
                label: 'topics',
                key: uniqid(),
                to: '/topics'
            },
            {
                label: 'education',
                key: uniqid(),
                to: '/education'
            }
        ];

        return (
            <div className={styles.root}>
                {/* <Consumer render={p => ( */}
                {/* <div> */}
                {/* <div> */}
                {/* {p.data.map(v => ( */}
                {/* <div key={v.CurrencyCode}> */}
                {/* {v.CurrencyCode} */}
                {/* </div> */}
                {/* ))} */}
                {/* </div> */}
                {/* <div> */}
                {/* <Link to="/"> */}
                {/* Main */}
                {/* </Link> */}
                {/* </div> */}
                {/* <div className="row"> */}
                {/* {links.map(route => ( */}
                {/* <div className="col-xs" key={route.key}> */}
                {/* <Link to={route.to}> */}
                {/* {route.label} */}
                {/* </Link> */}
                {/* </div> */}
                {/* ))} */}
                {/* </div> */}


                {/* </div> */}
                {/* )} */}
                {/* /> */}
                DESKTOP -HEADER-
                <NavTop />
            </div>
        );
    }
}
