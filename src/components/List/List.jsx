import React from 'react';
import PropTypes from 'prop-types';
// import isEqual from 'lodash/isEqual';
import Spinner from '../Spinner';

const List = (props) => {
    const { data, loading } = props;
    return (
        <div>
            {/* eslint-disable-next-line no-underscore-dangle */}
            {loading ? <Spinner /> : Array.isArray(data) && data.map(v => (
                /* eslint-disable-next-line no-underscore-dangle */
                <div key={v._id}>
                    <div>
                        <span>
                            name:
                        </span>
                        {v.name}
                    </div>
                </div>
            ))}
        </div>
    );
};


List.propTypes = {
    loading: PropTypes.bool.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

// function areEqual(prevProps, nextProps) {
//
//
//     /*
//     return true if passing nextProps to render would return
//     the same result as passing prevProps to render,
//     otherwise return false
//     */
//     // console.log('prevProps', prevProps);
//     // console.log('nextProps', nextProps);
//
//     return isEqual(prevProps.data, nextProps.data);
//     // return false;
// }

export default List;
// export default List;

// export default React.memo(List)

// export default List;
