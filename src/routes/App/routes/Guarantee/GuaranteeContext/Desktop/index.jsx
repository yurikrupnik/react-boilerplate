import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.css';
import links from '../../links';
import ParagraphWithLinks from '../ParagraphWithLinks/index';
import List from '../List/index';

const GuaranteeContext = (props) => {
    const { match } = props;
    const compContent = links[match.params.id];
    return (
        <div>
            <h1 className={styles.mainHeader}>
                {compContent.mainHeader}
            </h1>
            {compContent.sections.map((section, index) => (
                <Fragment key={index}> {/* eslint-disable-line*/}
                    {section.header ? <h3>{section.header}</h3> : null}
                    {section.listText // eslint-disable-line
                        ? <List listText={section.listText} />
                        : section.urlLink
                            ? <ParagraphWithLinks paragraphConfig={section} />
                            : <p>{section.text}</p>
                    }
                </Fragment>
            ))}
        </div>
    );
};

GuaranteeContext.propTypes = {
    match: PropTypes.shape({}).isRequired
};

export default GuaranteeContext;
