import uniqid from 'uniqid';
import React from 'react';
import PropTypes from 'prop-types';

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
        key: uniqid(),
        path: '/topics',
        component: () => (
            <h3>
                Please select a topic.
            </h3>
        ),
        exact: true
    },
    {
        key: uniqid(),
        path: '/topics/:topicId',
        component: Topic,
        exact: true
    }
];

export default routes;
