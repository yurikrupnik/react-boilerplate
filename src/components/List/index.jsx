import React, { Component } from 'react';
import PropTypes from 'prop-types';

class List extends Component {
    componentDidMount() {
        this.props.fetch();
    }
    render() {
        const { data, loading } = this.props;
        return (
            <div>
                { /* eslint-disable-next-line no-underscore-dangle */ }
                {loading ? <div style={{ background: 'red' }}>loading...</div> : data.map(v => (
                    <div key={v._id}>
                        <div>name: {v.name}</div>
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
