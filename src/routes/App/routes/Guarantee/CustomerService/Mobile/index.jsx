import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles.scss';
import GuaranteeForm from '../GuaranteeForm/index';

const configComp = [
    {
        icon: '',
        header: 'Call Us',
        text: 'USA: 877 826 9866, outside USA: +1 301 631 1414'
    }, {
        icon: '',
        header: 'Chat Now',
        path: '',
        text: 'Get instant answers to your questions'
    }, {
        icon: '',
        header: 'Email Us',
        isMailLink: true,
        path: 'mailto:social@jamesallen.com',
        text: 'All questions will be answered within two business days.'
    }, {
        icon: '',
        header: 'Real-Time Diamond Inspection',
        path: '/diamond-consultation',
        text: 'We offer an interactive Real-time Diamond Inspection service, the first of its kind in the industry. Our experts will share their screen with you, and walk you through the attributes of your favorite diamonds in Super Zoom magnification. Ask questions, mark points of interest on the diamond itself, and review everything from the specs to the grading certificate together.'
    }, {
        icon: '',
        header: 'Send a Message',
        path: '',
        text: 'All questions will be answered within two business days'
    }
];

const CustomerService = () => (
    <div className={styles.customerServiceContainer}>
        <h1 className={styles.customerServiceHeader}>
            24/7 Customer Service (MOBILE)
        </h1>
        <p>
            Our ravely-reviewed Customer Service team of non-commissioned
            diamond and jewelry experts is here for you 24/7.
        </p>
        <div>
            {configComp.map(item => (
                <div className={`row ${styles.itemContainer}`} key={item.header}>
                    <div className="col-xs-1">
                        icon
                    </div>
                    <div className="col-xs-11">
                        {(item.path)
                            ? (
                                <div className={styles.headerItem}>
                                    {item.isMailLink
                                        ? (
                                            <a ajaxmode="disabled" href={item.path}>
                                                {item.header}
                                            </a>
                                        )
                                        : (
                                            <Link to={item.path}>
                                                {item.header}
                                            </Link>
                                        )}
                                </div>
                            )
                            : <div>{item.header}</div>
                        }
                        <div>
                            {item.text}
                        </div>
                    </div>
                </div>
            ))
            }
        </div>
        <div className="row">
            <GuaranteeForm className="col-xs-11" />
        </div>
    </div>
);

export default CustomerService;
