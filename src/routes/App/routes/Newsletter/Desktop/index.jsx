import React from 'react';
import PropTypes from 'prop-types';
import InputBase from '@material-ui/core/Input/Input';
import Button from '@material-ui/core/Button/Button';
import styles from './styles.scss';

const NewsLetter = ({ handleSubmit }) => (
    <div className={`${styles.root}`}>
        <form className={`row ${styles.wrapper}`}>
            <div className={`col-lg-4 col-xs-12 ${styles.title} ${styles.margin}`}>
                sign up for our email list
            </div>
            <div className={`col-lg-4 col-xs-12 ${styles.margin}`}>
                <InputBase
                    fullWidth
                    className={styles.input}
                    type="email"
                    placeholder="Enter Email"
                    required
                />
            </div>
            <div className={`col-lg-2 col-xs-6 ${styles.margin}`}>
                <Button
                    disableRipple
                    variant={'contained'}
                    fullWidth
                    color="primary"
                    type="submit"
                    onClick={handleSubmit}
                    className={styles.button}
                >
                    MAN
                </Button>
            </div>
            <div className={`col-lg-2 col-xs-6 ${styles.margin}`}>
                <Button
                    variant={'contained'}
                    disableRipple
                    fullWidth
                    color="primary"
                    type="submit"
                    onClick={handleSubmit}
                    className={styles.button}
                >
                    WOMAN
                </Button>
            </div>
        </form>
        <div className={`row ${styles.text}`}>
            <div className="col-xs-12">
                By signing up you confirm that you have read the Privacy
                Policy and agree that your email and gender will be collected and used by
                James Allen for the purposes of sending news, promotions and updates via
                email. You can withdraw your consent at any time by unsubscribing
                or contacting us via <a href="mailto:service@jamesallen.com">
                <u>
                service@jamesalle.com
                </u>
            </a>
            </div>
        </div>
    </div>
);

NewsLetter.propTypes = {
    // handleSubmit: PropTypes.func.isRequired
};

export default NewsLetter;
