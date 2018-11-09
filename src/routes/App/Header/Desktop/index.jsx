import React from 'react';
import { Link } from 'react-router-dom';
// import uniqid from 'uniqid';
// import Top from './Top';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Consumer from '../../../../api/currency/context/consumer';

class DesktopNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: '',
            name: 'hai',
            labelWidth: 0,
        };

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
            }
        ];

        return (
            <div>
                <Consumer render={(p) => {
                    console.log('p', p);
                    return (
                        <div>
                            header deskotp
                            <FormControl >
                                <InputLabel htmlFor="age-simple">Age</InputLabel>
                                <Select
                                    value={this.state.age}
                                    onChange={this.handleChange}
                                    inputProps={{
                                        name: 'age',
                                        id: 'age-simple',
                                    }}
                                >

                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
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
