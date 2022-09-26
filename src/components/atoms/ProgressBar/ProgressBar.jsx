import React, { useState, useEffect } from 'react';
import { IonProgressBar } from '@ionic/react';

const ProgressBar = (props) => {
    const { currProgress, totalProgress, color } = props;
    const [progress, setProgress] = useState(currProgress / totalProgress);

    useEffect(() => {
        setProgress(currProgress / totalProgress);
    }, []);

    return (
        <IonProgressBar
            value={progress}
            color={color || 'dark'}
        ></IonProgressBar>
    );
};
export default ProgressBar;
