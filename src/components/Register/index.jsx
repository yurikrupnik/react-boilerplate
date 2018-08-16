import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import TextField from 'material-ui/TextField';
// import RaisedButton from 'material-ui/RaisedButton';
import faker from 'faker';

import socket from '../../services/socket/client';

class Register extends Component {
    // TODO set propTypes and tests - break into smaller parts
    constructor(props) {
        super(props);
        this.socket = socket;
        this.state = {
            form: [
                {
                    label: '',
                    type: 'text',
                    name: 'nickname',
                    value: '',
                    validate() {
                        return this.value.length;
                    },
                    errorText: 'no lenght',
                    onChange: this.onChange.bind(this),
                    handleBlur: this.handleBlur.bind(this),
                    touched: false,
                },
                {
                    label: '',
                    type: 'text',
                    name: 'asd',
                    value: 'd',
                    validate() {
                        return this.value.length;
                    },
                    errorText: 'no lenght',
                    onChange: this.onChange.bind(this),
                    handleBlur: this.handleBlur.bind(this),
                    touched: false,
                }
            ]
        };

        this.onRegister = this.onRegister.bind(this);
    }

    onChange(event) {
        const { target } = event;
        // console.log('target.dateset', target.dataset);

        const { name, value, dataset } = target;
        const { index } = dataset;
        this.setState((prevState) => {
            const item = prevState.form[index];
            item.value = value;
            return prevState;
        });
        // this.setState(prevState => ({
        //     form: prevState.form.map((field) => {
        //         if (field.name === name) {
        //             field.value = value; // eslint-disable-line no-param-reassign
        //         }
        //         return field;
        //     })
        // }));
    }

    onRegister(event) {
        event.preventDefault();
        // const { history } = this.props;
        // const { session } = actions;
        // const { setSession } = session;
        const { form } = this.state;
        const nickname = form[0].value;
        const avatar = faker.image.avatar();
        const newSession = { nickname, avatar };
        // console.log('history', history);

        this.socket.emit('newUser', newSession, (err) => {
            // history.push('/chat');
            if (!err) {
                // console.log('newSession', newSession);
                // setSession(newSession);
            } else {
                this.setState(prevState => ({
                    form: prevState.form.map((field) => {
                        field.errorText = err; // eslint-disable-line no-param-reassign
                        field.value = ''; // eslint-disable-line no-param-reassign
                        return field;
                    })
                }));
            }
        });
    }

    handleBlur(event) {
        const { target } = event;
        const { dataset } = target;
        const { index } = dataset;
        this.setState((prevState) => {
            const item = prevState.form[index];
            item.touched = true;
            return prevState;
        });
    }

    render() {
        const { form } = this.state;
        // const hasName = form[0].value;
        return (
            <div>
                {form.map((val, index) => (
                    <div key={val.name}>
                        {val.validate() ? null : (
                            <div>
                                {val.touched && val.errorText}
                            </div>
                        )}
                        <input
                            onBlur={val.handleBlur}
                            name={val.name}
                            type={val.type}
                            data-index={index}
                            onChange={val.onChange}
                            placeholder={val.placeholder}
                            value={val.value}
                        />
                    </div>
                ))}

                <button type="button" onClick={this.onRegister}>
                    Register
                </button>
            </div>
        );
    }
}

export default Register;
