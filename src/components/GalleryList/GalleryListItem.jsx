import React, { Component } from 'react';
import styles from './styles.css';
import Button from './Button';

class GalleryListItem extends Component {
    constructor(props) {
        super(props);
        this.toggleVisited = this.toggleVisited.bind(this);
        this.toggleCompared = this.toggleCompared.bind(this);
        this.toggleWishlist = this.toggleWishlist.bind(this);
    }

    toggleVisited() {
        const { index, toggleVisited } = this.props;
        toggleVisited(index);
    }

    toggleCompared() {
        const { index, toggleCompared } = this.props;
        toggleCompared(index);
    }

    toggleWishlist() {
        const { index, toggleWishlist } = this.props;
        toggleWishlist(index);
    }

    render() {
        const {
            index,
            isVisited,
            isCompared,
            isWishlist,
            Picture,
            Shape,
            Carat,
            Color,
            Clarity,
            Cut,
            Depth,
            TableSize,
            Lab,
            Origin,
            Price
        } = this.props;
        return (
            <div className={styles['flex-container']}
                 style={{ color: isVisited ? '#b05656' : 'black' }}
            >
                <div className={styles['flex-item']}>
                    <img src={Picture} alt="image here" />
                </div>
                <div className={styles['flex-item']}>
                    {Shape}
                </div>
                <div className={styles['flex-item']}>
                    {Carat}
                </div>
                <div className={styles['flex-item']}>
                    {Color}
                </div>
                <div className={styles['flex-item']}>
                    {Clarity}
                </div>
                <div className={styles['flex-item']}>
                    {Cut}
                </div>
                <div className={styles['flex-item']}>
                    {Depth}
                </div>
                <div className={styles['flex-item']}>
                    {TableSize}
                </div>
                <div className={styles['flex-item']}>
                    {Lab}
                </div>
                <div className={styles['flex-item']}>
                    {Origin || '-'}
                </div>
                <div className={styles['flex-item']}>
                    {Price || 123}
                </div>
                <div className={styles['flex-item']}>
                    <i onClick={this.toggleCompared}
                       className="material-icons"
                       style={{ color: isCompared || isVisited ? '#b05656' : 'black' }}
                    >
                        compare
                    </i>
                </div>
                <div className={styles['flex-item']}>
                    <i onClick={this.toggleWishlist}
                       className="material-icons"
                       style={{ color: isWishlist || isVisited ? '#b05656' : 'black' }}
                    >
                        adjust
                    </i>
                </div>
                <div className={styles['flex-item']}>
                    <Button
                        isVisited={isVisited}
                        onClick={this.toggleVisited}
                    >
                        <i className="material-icons">
                            adjust
                        </i>
                    </Button>
                    <Button
                        isVisited={isVisited}
                        onClick={this.toggleVisited}
                    >
                        DETAILS
                    </Button>
                </div>
            </div>
        );
    }
}

export default GalleryListItem;
