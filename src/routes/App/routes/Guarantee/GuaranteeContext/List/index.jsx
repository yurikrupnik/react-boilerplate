import React from 'react';
import PropTypes from 'prop-types';

const List = (props) => {
    const { listText } = props;
    return (
        <ol>
            {listText.map(item => (
                <li key={item}>
                    {item}
                </li>
            ))}
        </ol>
    );
};


List.propTypes = {
    listText: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default List;
