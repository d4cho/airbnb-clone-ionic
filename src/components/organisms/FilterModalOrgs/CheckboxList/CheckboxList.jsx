import React, { useState, useRef } from 'react';
import './CheckboxList.scss';
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import Checkbox from '../../../atoms/Checkbox/Checkbox';

const CheckboxList = (props) => {
    const {
        headingText,
        descTextExpanded,
        checkboxData,
        isExpandable,
        numItemsCollapsed,
    } = props;
    const [isExpanded, setIsExpanded] = useState(false);

    const headingRef = useRef();

    const renderCheckboxItems = (arr) => {
        let newArr = [...arr];
        if (!isExpanded) {
            newArr = arr.slice(0, numItemsCollapsed);
        }

        return newArr.map((item, idx) => {
            return (
                <IonRow key={`item-${idx}`} className='pad-12'>
                    <IonCol>
                        <div className='CheckboxList_text'>{item.text}</div>
                        {item.subtext && (
                            <div className='CheckboxList_subtext'>
                                {item.subtext}
                            </div>
                        )}
                    </IonCol>
                    <IonCol size={1}>
                        <Checkbox />
                    </IonCol>
                </IonRow>
            );
        });
    };

    const renderCheckboxTitles = (arr) => {
        return arr.map((item, idx) => {
            return (
                <React.Fragment key={idx}>
                    {item.checkboxListTitle && (
                        <div className='CheckboxList_subheading'>
                            {item.checkboxListTitle}
                        </div>
                    )}
                    {renderCheckboxItems(item.checkboxItems)}
                </React.Fragment>
            );
        });
    };

    const handleExpandCollapse = () => {
        setIsExpanded(!isExpanded);
        headingRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='CheckboxList_container'>
            {headingText && (
                <div ref={headingRef} className='CheckboxList_heading'>
                    {headingText}
                </div>
            )}
            {descTextExpanded && isExpanded && (
                <div className='CheckboxList_descText'>{descTextExpanded}</div>
            )}
            <div>
                <IonGrid className='ion-no-padding'>
                    {isExpanded
                        ? renderCheckboxTitles(checkboxData)
                        : renderCheckboxTitles(checkboxData.slice(0, 1))}
                </IonGrid>
            </div>
            {isExpandable && (
                <div
                    className='expand_collapse pad-12'
                    onClick={handleExpandCollapse}
                >
                    {isExpanded ? 'Show less' : 'Show more'}
                </div>
            )}
        </div>
    );
};

export default CheckboxList;
