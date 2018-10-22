import React, {Component} from 'react';
import styles from './styles.css';


const List = (props) => {
    return (
        <ol>
            {props.listText.map((item, index) => (
                <li key={index}>
                    {item}
                </li>
            ))}
        </ol>
    );
}

const ParagraphWithLinks = (props) => {
    const {text, labelLink, urlLink} = props.paragraphConfig;
    return (
        <p>
            {text.split(labelLink)[0]}
            <span>
                <a href={urlLink}>{labelLink}</a>
            </span>
            {text.split(labelLink)[1]}
        </p>
    );
}


class GeneralComp extends Component {
    render() {
        const { match } = this.props;
        console.log('match.params.param', match.params.id)
        return (
            <div>
                dynamic page
            </div>
        );
        // const compContent = this.props.routeInfo;
        // return (
        //     <div className={styles.mainGeneralComp}>
        //         <h1 className={styles.mainHeader}>
        //             {compContent.mainHeader}
        //         </h1>
        //         {compContent.sections.map((section, index) => (
        //             <React.Fragment key={index}>
        //                 {section.header ? <h3>{section.header}</h3> : null}
        //                 {(!section.listText) ?
        //                     (!section.urlLink) ?
        //                         <p>{section.text}</p>
        //                         :
        //                         <ParagraphWithLinks paragraphConfig={section}/>
        //                     :
        //                     <List listText={section.listText}/>
        //                 }
        //             </React.Fragment>
        //         ))}
        //     </div>
        // );
    }
}

export default GeneralComp;
