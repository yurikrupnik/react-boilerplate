import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTabIndex: props.activeTabIndex
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const { target } = e;
        const { dataset } = target;
        const { index } = dataset;
        this.setState(() => ({ activeTabIndex: Number(index) }));
    }

    render() {
        const { activeTabIndex } = this.state;
        const { data } = this.props;
        return (
            <div className={styles.react_tabs__tab_list}>
                {data.map((value, index) => {
                    const isActive = activeTabIndex === index;
                    const isDisabled = value.disabled;
                    const className = `${styles.react_tabs__tab}
                        ${isActive ? styles.react_tabs__tab__selected : ''}
                        ${isDisabled ? styles.react_tabs__tab__disabled : ''}`;
                    return (
                        <button
                            type="button"
                            key={value.label}
                            data-index={index}
                            disabled={isDisabled}
                            className={className}
                            onClick={this.handleClick}
                        >
                            {value.label}
                        </button>
                    );
                })}
            </div>
        );
    }
}

Tabs.defaultProps = {
    activeTabIndex: 0
};

Tabs.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        disabled: PropTypes.bool.isRequired
    })).isRequired,
    activeTabIndex: PropTypes.number
};

export default Tabs;
