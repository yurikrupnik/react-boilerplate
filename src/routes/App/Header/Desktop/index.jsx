import React from 'react';
import { Link } from 'react-router-dom';
// import uniqid from 'uniqid';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Consumer from '../../../../api/currency/context/consumer';
import Top from './Top';

class DesktopNav extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

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
            },
            {
                label: 'yeabl1',
                to: '/yeabl1'
            },
            {
                label: 'yeabl2',
                to: '/yeabl2'
            }
        ];

        return (
            <div>
                <Consumer render={(p) => {
                    console.log('p', p);

                    return (
                        <div>
                            <div>
                                header deskotp
                            </div>
                            <Top routes={[]} />
                            <FormControl>
                                <Select
                                    value={p.selected}
                                    onChange={p.setSelected}
                                >

                                    {
                                        p.data.map(a => (
                                            <MenuItem
                                                key={a.CurrencyCode}
                                                value={a.CurrencyCode}
                                            >
                                                {a.CurrencyCode}
                                            </MenuItem>
                                        ))
                                    }
                                </Select>
                            </FormControl>
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
                                <div>
                                    <a href="https://www.jamesallen.com/">
                                        Go to james
                                    </a>
                                </div>
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
