import React from 'react';
// import PropTypes from 'prop-types';

const CustomerService = (props) => (

    <div>
        <h2>24/7 Customer Service</h2>
        <p>
            Our ravely-reviewed Customer Service team of non-commissioned
            diamond and jewelry experts is here for you 24/7.
        </p>
        <div className="row">
            <div className="col-xs-1">
                icon
            </div>
            <div className="col-xs-11">
                <div>
                    Call Us
                </div>
                <div>
                    USA: 877 826 9866, outside USA: +1 301 631 1414
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-xs-1">
                icon
            </div>
            <div className="col-xs-11">
                <div>
                    Cgat Now
                </div>
                <div>
                    Get instant answers to your questions.
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-xs-1">
                icon
            </div>
            <div className="col-xs-11">
                <div>
                    Email us
                </div>
                <div>
                    All questions will be answered within two business days.
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-xs-1">
                icon
            </div>
            <div className="col-xs-11">
                <div>
                    Real-Time Diamond Inspection
                </div>
                <div>
                    We offer an interactive Real-time Diamond Inspection service,
                    the first of its kind in the industry. Our experts will share their
                    screen with you, and walk you through the attributes of your favorite
                    iamonds in Super Zoom magnification. Ask questions, mark points of interest
                    on the diamond itself, and review everything from the specs to the
                    grading certificate together.
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-xs-1">
                icon
            </div>
            <div className="col-xs-11">
                <div>
                    Send a Message
                </div>
                <div>
                    All questions will be answered within two business days.
                </div>
            </div>
        </div>
        <div>
            <div className="row">
                <div className="col-xs-4">
                    <div>
                        name
                    </div>
                    <input type="text" />
                </div>
                <div className="col-xs-4">
                    <div>
                        Email
                    </div>
                    <input type="text" />
                </div>
                <div className="col-xs-4">
                    <div>
                        Phone
                    </div>
                    <input type="text" />
                </div>
            </div>
            <div>
                <textarea style={{width: '100%'}}></textarea>
            </div>
            <div>
                <button>
                    Send
                </button>
            </div>
        </div>
    </div>
);


// CustomerService.propTypes = {
//     match: PropTypes.shape({}).isRequired
// };

export default CustomerService;
