/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import styles from './styles.scss';

class GuaranteeForm extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('click');
    }

    render() {
        const { handleClick } = this;
        return (
            <div className={styles.mainContainer}>
                <div className={styles.inputsContainer}>
                    <div>
                        <div>
                            Name
                        </div>
                        <input type="text" />
                    </div>
                    <div>
                        <div>
                            Email
                        </div>
                        <input type="text" />
                    </div>
                    <div className={styles.test}>
                        <div>
                            Phone (optional)
                        </div>
                        <input type="text" />
                    </div>
                </div>
                <div className={styles.textareaContainer}>
                    <div>
                        Message
                    </div>
                    <textarea />
                </div>
                <div className={styles.btnContainer}>
                    <button onClick={handleClick}>
                        Send
                    </button>
                </div>
            </div>
        );
    }
}

export default GuaranteeForm;
