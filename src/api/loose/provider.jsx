import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from './context';
import api from './api';

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};

const toggleLoading = prevState => ({ loading: !prevState.loading });

class VisitedProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    addItem(item) {
        this.setState(state => ({
            data: state.data.concat(item)
        }));
    }

    removeItem(index) {
        this.setState((state) => {
            state.data.splice(index, 1);
            return state;
        });
    }

    render() {
        const { render } = this.props;
        const { data } = this.state;
        console.log('data', data);

        return render({
            data,
            addItem: this.addItem,
            removeItem: this.removeItem
        });
    }
}

class LooseDiamondsProvider extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: [],
            loading: false,
            selected: null,
            lastFetch: '',
            // visited: [],
            // compared: []
        };
        this.fetch = this.fetch.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
        this.toggleCallback = this.toggleCallback.bind(this);
        this.toggleVisited = this.toggleVisited.bind(this);
        this.toggleCompared = this.toggleCompared.bind(this);
        this.toggleWishlist = this.toggleWishlist.bind(this);
    }

    onDragEnd(result) {
        debugger;
        // dropped outside the list
        if (!result.destination) {
            return;
        }
        const { data } = this.state;
        this.setState({
            data: reorder(
                data,
                result.source.index,
                result.destination.index
            )
        });
    }

    toggleCallback(params, cb) {
        return () => api.fetch(params)
            .then((response) => {
                const { R } = response;
                const { L } = R;
                const { D } = L;

                const data = D.map(item => {
                    item.Picture = 'https://ion.r2net.com/sgmdirect/photoID/8380704/diamond/5147130/DiamondID-round-0.71-Carat-K-I1_2_first_.jpg';
                    item.isVisited = false;
                    item.isCompared = false;
                    item.isWishlist = false;
                    return item;
                });

                this.setState(prevState => ({
                    data,
                    loading: !prevState.loading
                }), cb);
            })
            .catch((error) => {
                this.setState(prevState => ({
                    error,
                    loading: !prevState.loading
                }));
            });
    }

    fetch(params, cb) {
        this.setState(toggleLoading, this.toggleCallback(params, cb));
    }

    toggleVisited(index) {
        this.setState((prevState) => {
            const item = prevState.data[index];
            item.isVisited = !item.isVisited;
            return prevState;
        });
    }

    toggleCompared(index) {
        this.setState((prevState) => {
            const item = prevState.data[index];
            item.isCompared = !item.isCompared;
            return prevState;
        });
    }

    toggleWishlist(index) {
        this.setState((prevState) => {
            const item = prevState.data[index];
            item.isWishlist = !item.isWishlist;
            return prevState;
        });
    }

    render() {
        const { children } = this.props;
        return (
            <Provider value={{
                ...this.state,
                fetch: this.fetch,
                onDragEnd: this.onDragEnd,
                toggleVisited: this.toggleVisited,
                toggleCompared: this.toggleCompared,
                toggleWishlist: this.toggleWishlist
            }}
            >
                {children}
            </Provider>
        );
    }
}

LooseDiamondsProvider.propTypes = {
    children: PropTypes.element.isRequired,
};

export default LooseDiamondsProvider;
