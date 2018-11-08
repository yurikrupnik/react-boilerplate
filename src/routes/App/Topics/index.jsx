import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import routes from './routes';
import Route from '../../../components/Route';

const Topics = (props) => {
    const { match } = props;
    const data = [
        {
            value: 'props-v-state',
            title: 'Props v. State'
        },
        {
            value: 'components',
            title: 'Components'
        },
        {
            value: 'rendering',
            title: 'Rendering with React'
        }
    ];
    return (
        <div>
            <h2>
                Topics
            </h2>
            <ul>
                {data.map(val => (
                    <li key={val.value}>
                        <Link to={`${match.url}/${val.value}`}>
                            {val.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <div>
                {routes.map(route => (
                    <Route
                        key={route.key}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                    />
                ))}
            </div>

        </div>
    );
};

Topics.propTypes = {
    match: PropTypes.shape({}).isRequired
};
// console.log('React.memo(Topics)', React.memo(Topics));
// console.log('Topics', Topics);

export default Topics;
