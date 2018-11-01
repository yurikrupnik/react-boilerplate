import React from 'react';
import PropTypes from 'prop-types';
import Router from '../../services/Router';

const Topic = ({ match }) => (
    <div>
        <h3>
            {match.params.topicId}
        </h3>
    </div>
);

Topic.propTypes = {
    match: PropTypes.shape({}).isRequired
};

const routes = [
    {
        path: '/topics',
        component: () => (
            <h3>
                Please select a topic.
            </h3>
        ),
        exact: true
    },
    {
        path: '/topics/:topicId',
        component: Topic,
        exact: true
    }
];

export default Router.create(routes);
