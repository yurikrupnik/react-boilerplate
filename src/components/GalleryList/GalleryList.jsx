import React from 'react';
import PropTypes from 'prop-types';
import GalleryHeader from './Header';
import GalleryListItem from './GalleryListItem';

const GalleryList = (props) => {
    const {
        data, toggleVisited, toggleCompared, toggleWishlist
    } = props;

    return (
        <div>
            <GalleryHeader />
            {data.map((item, index) => (
                <GalleryListItem
                    key={item.DiamondID}
                    toggleVisited={toggleVisited}
                    toggleCompared={toggleCompared}
                    toggleWishlist={toggleWishlist}
                    index={index}
                    {...item}
                />
            ))}
        </div>
    );
};

GalleryList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    toggleVisited: PropTypes.func.isRequired,
    toggleCompared: PropTypes.func.isRequired,
    toggleWishlist: PropTypes.func.isRequired
};

export default GalleryList;
