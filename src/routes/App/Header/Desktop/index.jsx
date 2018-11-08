import React from 'react';
import { Link } from 'react-router-dom';
// import uniqid from 'uniqid';
// import Top from './Top';
import Consumer from '../../../../api/currency/context/consumer';

class DesktopNav extends React.Component {
    render() {
        const links = [
            {
                label: 'guarantee',
                to: '/guarantee'
            },
            {
                label: 'topics',
                to: '/topics'
            },
            {
                label: 'education',
                to: '/education'
            }
        ];

        return (
            <div>
                <Consumer render={(p) => {
                    return (
                        <div>
                            header deskotp
                            {/*<Top routes={[]} />*/}
                            <div>
                                {p.data.map(v => (
                                    <div key={v.CurrencyCode}>
                                        {v.CurrencyCode}
                                    </div>
                                ))}
                            </div>
                            <div>
                                <Link to="/">
                                    Main
                                </Link>
                            </div>
                            <div className="row">
                                {links.map(route => (
                                    <div className="col-xs" key={route.label}>
                                        <Link to={route.to}>
                                            {route.label}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                }}
                />
            </div>
        );
    }
}


// const DesktopNav = (props) => {
//     const links = [
//         {
//             label: 'guarantee',
//             key: uniqid(),
//             to: '/guarantee'
//         },
//         {
//             label: 'topics',
//             key: uniqid(),
//             to: '/topics'
//         },
//         {
//             label: 'education',
//             key: uniqid(),
//             to: '/education'
//         }
//     ];
//     console.log('headers props', props);
//
//     return (
//         <header>
//             header deskotp
//             {/*<Top routes={headerRoutes} />*/}
//             <div>
//                 <Link to="/">
//                     Main
//                 </Link>
//             </div>
//             <div className="row">
//                 {links.map(route => {
//                     return (
//                         <div className="col-xs" key={route.key}>
//                             <Link to={route.to}>
//                                 {route.label}
//                             </Link>
//                         </div>
//                     );
//                 })}
//             </div>
//         </header>
//     );
// };

// DesktopNav.propTypes = {
// routes: PropTypes.arrayOf(PropTypes.shape({
//     key: PropTypes.string.isRequired,
//     path: PropTypes.string.isRequired
// })).isRequired,
// };
//
export default DesktopNav;
