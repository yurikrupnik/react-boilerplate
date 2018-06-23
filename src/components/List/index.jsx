import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';

class List extends Component {
    // componentDidMount() {
    //     const { fetch, data } = this.props;
    //     if (!data.length) {
    //         fetch();
    //     }
    // }

    render() {
        const { data, loading } = this.props;
        return (
            <div>
                { /* eslint-disable-next-line no-underscore-dangle */ }
                {loading ? <Spinner /> : data.map(v => (
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
    }
}

List.defaultProps = {
    fetch: () => {},
    loading: false,
    data: []
};

List.propTypes = {
    fetch: PropTypes.func,
    loading: PropTypes.bool,
    data: PropTypes.arrayOf(PropTypes.shape({}))
};

export default List;
