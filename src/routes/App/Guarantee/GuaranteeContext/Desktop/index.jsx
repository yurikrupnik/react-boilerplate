import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import links from '../../links';
import ParagraphWithLinks from '../ParagraphWithLinks/index';
import List from '../List/index';
// import CountriesShipping from './CountriesShipping';

const GuaranteeContext = (props) => {
    const { match } = props;
    const compContent = links[match.params.id];
    return (
        <div className={styles.root}>
            <div>
                <h1 className={styles.header}>
                    {compContent.mainHeader}
                </h1>
                {compContent.sections.map((section, index) => (
                    <Fragment key={index}>
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
        </div>
        // {compContent.mainHeader === 'Free Shipping Worldwide' ? <CountriesShipping/> : null}
    );
};

GuaranteeContext.propTypes = {
    match: PropTypes.shape({}).isRequired
};

export default GuaranteeContext;
