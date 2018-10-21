import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route } from 'react-router-dom';
import routes from './routes';
import Router from '../Router';

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
            {routes.map(route => {
                return (
                    <Route path={route.path} exact={route.export} component={route.component}/>
                )
            })}

        </div>
    );
};

Topics.propTypes = {
    match: PropTypes.shape({}).isRequired
};

export default Topics;
