import React from 'react';
import styles from './styles.scss';

class JustifyAlign extends React.Component {
    render() {
        const { styled, children, className } = this.props;
        const dataStyled = this.props['data-styled'];
        return (
            <div
                {...this.props}
                className={`${styles['justify-align']} ${className || ''}`}
                style={styled || dataStyled}
            >
                {
                    children.map(x => [x, ' '])
                }
            </div>
        );
    }
}

export default JustifyAlign;
