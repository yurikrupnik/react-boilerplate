import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ data }) => (
    <div>
        <a href={data.href}>
            <img src={data.imgSrc} alt={data.imgAlt} />
        </a>
    </div>
);

Image.propTypes = {
    data: PropTypes.shape({
        href: PropTypes.string,
        imgSrc: PropTypes.string,
        imgAlt: PropTypes.string,
    }).isRequired
};

export default Image;
