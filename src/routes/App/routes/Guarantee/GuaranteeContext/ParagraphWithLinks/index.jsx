import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

const ParagraphWithLinks = (props) => {
    const { paragraphConfig } = props;
    const { text, labelLink, urlLink } = paragraphConfig;
    return (
        <p>
            {text.split(labelLink)[0]}
            <span>
                <Link to={urlLink}>{labelLink}</Link>
            </span>
            {text.split(labelLink)[1]}
        </p>
    );
};

ParagraphWithLinks.propTypes = {
    paragraphConfig: PropTypes.shape({}).isRequired
};

export default ParagraphWithLinks;
