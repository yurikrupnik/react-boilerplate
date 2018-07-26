import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable as Drag } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};

class Draggable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.data === this.props.data) {
            this.setState({ data: nextProps.data });
        }
    }

    onDragEnd(result) {
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

    render() {
        const {
            children, toggleVisited, toggleCompared, toggleWishlist, component
        } = this.props;
        const { data } = this.state;
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided, snapshot) => {
                        return (
                            <div
                                ref={provided.innerRef}
                            >
                                {children}
                                {data.map((item, index) => (
                                    <Drag
                                        key={item.DiamondID}
                                        draggableId={item.DiamondID}
                                        index={index}
                                    >
                                        {(provid, snapshot) => {
                                            return (
                                                <div
                                                    ref={provid.innerRef}
                                                    {...provid.draggableProps}
                                                    {...provid.dragHandleProps}
                                                >
                                                    {
                                                        React.createElement(component, {
                                                            ...item,
                                                            index,
                                                            toggleVisited,
                                                            toggleCompared,
                                                            toggleWishlist
                                                        })
                                                    }
                                                </div>
                                            )
                                        }}
                                    </Drag>
                                ))}
                                {provided.placeholder}
                            </div>
                        )
                    }}
                </Droppable>
            </DragDropContext>
        );
    }
}

Draggable.defaultProps = {
    children: null
};

Draggable.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    component: PropTypes.func.isRequired,
    children: PropTypes.shape({}),
    toggleWishlist: PropTypes.func.isRequired,
    toggleCompared: PropTypes.func.isRequired,
    toggleVisited: PropTypes.func.isRequired,
};

export default Draggable;
