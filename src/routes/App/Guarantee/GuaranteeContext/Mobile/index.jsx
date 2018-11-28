/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import links from '../../links';
import ParagraphWithLinks from '../ParagraphWithLinks/index';
import List from '../List/index';
import HeaderMobile from '../../HeaderMobile';
import CountriesShipping from './CountriesShipping';

const GuaranteeContext = ({ match }) => {
    const compContent = links[match.params.id];
    return (
        <div className={styles.root}>
            <HeaderMobile text={compContent.mainHeader} />
            {compContent.sections.map((section, index) => (
                <div key={index}>
                    {compContent.mainHeader === 'Free Shipping Worldwide' && index === 1 && <CountriesShipping /> }
                    {section.header && <h3>{section.header}</h3> }
                    {section.listText
                        ? <List listText={section.listText} />
                        : section.urlLink
                            ? <ParagraphWithLinks paragraphConfig={section} />
                            : <p>{section.text}</p>
                    }
                </div>
            ))}
        </div>
    );
};

GuaranteeContext.propTypes = {
    match: PropTypes.shape({}).isRequired
};

export default GuaranteeContext;
