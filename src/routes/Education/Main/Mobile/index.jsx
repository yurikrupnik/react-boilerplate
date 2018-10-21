import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import links from '../links';
// import routes from '../../routes';

const MainMobile = (props) => {
    // console.log('props', props);
    return (
        <div>
            <h1>education center mobile</h1>
            <h1>error here is import routes </h1>
            {/*{*/}
                {/*links.map(route => (*/}
                    {/*<Link style={{color: 'red'}} key={route.key} to={route.to}>*/}
                        {/*{route.label}*/}
                    {/*</Link>*/}
                {/*))*/}
            {/*}*/}
        </div>
    );
};

// Main.propTypes = {
//     routes: PropTypes.arrayOf(PropTypes.shape({
//         key: PropTypes.string.isRequired,
//         path: PropTypes.string.isRequired
//     })).isRequired
// };

export default MainMobile;
