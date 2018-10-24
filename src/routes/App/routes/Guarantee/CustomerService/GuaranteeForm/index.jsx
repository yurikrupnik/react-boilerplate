import React, { Component } from 'react';
import styles from './styles.scss';

class GuaranteeForm extends Component {
    render() {
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
                    <button>
                        Send
                    </button>
                </div>
            </div>
        );
    }
}

export default GuaranteeForm;
