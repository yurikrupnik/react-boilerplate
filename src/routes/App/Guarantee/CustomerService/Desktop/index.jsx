/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.scss';
import GuaranteeForm from './GuaranteeForm/index';
import data from '../data';

const CustomerService = () => {
    const { header, text, items } = data;
    return (
        <div className={styles.root}>
            <h1 className={styles.header}>
                {header}
            </h1>
            <p>
                {text}
            </p>
            <div>
                {items.map(item => (
                    (item.type === 'general' || item.type === 'desktop')
                     && (
                         <div className={`row ${styles.itemContainer}`} key={item.header}>
                             <span className={`col-xs-1 ${styles.icon} ${styles[item.icon]}`} />
                             <div className="col-xs-11">
                                 {item.path
                                     ? (
                                         <div className={styles.headerItem}>
                                             {item.header === 'Email Us'
                                                 ? (
                                                     <a ajaxmode="disabled" href={item.path}>
                                                         {item.header}
                                                     </a>
                                                 )
                                                 : (
                                                     <Link to={item.path}>
                                                         {item.header}
                                                     </Link>
                                                 )
                                             }
                                         </div>
                                     )
                                     : (
                                         <div>
                                             {item.header}
                                         </div>
                                     )
                                 }
                                 <div>
                                     {item.text}
                                 </div>
                             </div>
                         </div>
                     )))}
            </div>
            <div className="row">
                <GuaranteeForm className="col-xs-11" />
            </div>
        </div>
    );
};


export default CustomerService;
