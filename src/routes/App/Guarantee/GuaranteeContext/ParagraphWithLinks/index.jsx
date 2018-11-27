/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const ParagraphWithLinks = (props) => {
    const { paragraphConfig } = props;
    const { text, labelLink, urlLink } = paragraphConfig;
    return (
        <p>
            {text.split(labelLink)[0]}
            <span>
                <Link className={styles.link} to={urlLink}>{labelLink}</Link>
            </span>
            {text.split(labelLink)[1]}
        </p>
    );
};

ParagraphWithLinks.propTypes = {
    paragraphConfig: PropTypes.shape({}).isRequired
};

export default ParagraphWithLinks;
