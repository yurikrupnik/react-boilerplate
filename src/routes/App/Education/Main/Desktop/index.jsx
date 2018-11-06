import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import routes from '../../routes';
// import links from '../links';

const MainDesktop = (props) => {
    return (
        <div>
            <h1>education center desktop</h1>
            {/*{links.map(r => {*/}
                {/*return (*/}
                    {/*<Link key={r.key} to={r.to}>*/}
                        {/*{r.label}*/}
                    {/*</Link>*/}
                {/*);*/}
            {/*})}*/}
        </div>
    );
};

// Main.propTypes = {
//     routes: PropTypes.arrayOf(PropTypes.shape({
//         key: PropTypes.string.isRequired,
//         path: PropTypes.string.isRequired
//     })).isRequired
// };

export default React.memo(MainDesktop);
