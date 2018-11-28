import React from 'react';
import styles from './styles.scss';
// import PropTypes from 'prop-types';

const countriesData = [
    'Australia', 'Austria', 'Bermuda', 'Canada', 'Denmark', 'Finland', 'Germany', 'Greece',
    'Hong Kong', 'Ireland', 'Italy', 'Japan', 'Netherlands', 'New Zealand', 'Norway', 'Portugal',
    'Singapore', 'Spain', 'Sweden', 'Trinidad and Tobago', 'United Arab Emirates', 'United Kingdom', 'United States'
];

const CountriesShipping = () => (
    <div className={styles.root}>
        <h3>We ship to:</h3>
        {countriesData.map(country => (
            <div key={country}>{country}</div>
        ))}
    </div>
);

export default CountriesShipping;
