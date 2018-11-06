import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import links from '../../links';
import ParagraphWithLinks from '../ParagraphWithLinks/index';
import List from '../List/index';
import HeaderMobile from '../../HeaderMobile';
import CountriesShipping from './CountriesShipping';

const GuaranteeContext = (props) => {
    const { match } = props;
    const compContent = links[match.params.id];
    return (
        <div className={styles.root}>
            <HeaderMobile text={compContent.mainHeader} />
            {compContent.sections.map((section, index) => (
                <Fragment key={section.header}>
                    {compContent.mainHeader === 'Free Shipping Worldwide' && index === 1 ? <CountriesShipping /> : null}
                    {section.header ? <h3>{section.header}</h3> : null}
                    {section.listText
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
