import React from 'react';
import './FrequencyGraph.scss';
import { fixDataByIncrement } from '../../../utils/functions/functions';

const FrequencyGraph = (props) => {
    const { arrOfNums, minPercentage, maxPercentage } = props;

    let fixedThousandPlusPriceData = [];
    // nums that are >= 1000 will be set to 1000
    arrOfNums.forEach((price) => {
        if (price >= 1000) {
            fixedThousandPlusPriceData.push(1000);
        } else {
            fixedThousandPlusPriceData.push(price);
        }
    });

    // creates array of range-incremented arrays
    // e.g. [[0-49], [50-99], [100-149], ...]
    const rangeIncrementedPriceData = fixDataByIncrement(
        fixedThousandPlusPriceData,
        0,
        1000,
        25
    );

    const renderBarGraph = () => {
        let highestFrequency = 0;
        rangeIncrementedPriceData.forEach((arr) => {
            if (arr.length > highestFrequency) {
                highestFrequency = arr.length;
            }
        });

        return rangeIncrementedPriceData.map((range, idx) => {
            const barWidth = 100 / rangeIncrementedPriceData.length;
            const barHeight = (range.length / highestFrequency) * 100;

            const isOpaque =
                barWidth * (idx + 1) < minPercentage ||
                barWidth * (idx + 1) > maxPercentage;

            return (
                <div
                    key={idx}
                    className='FrequencyGraph_bar'
                    style={{
                        width: `${barWidth}%`,
                        height: barHeight,
                        opacity: isOpaque ? 0.5 : 1,
                    }}
                />
            );
        });
    };

    return (
        <div id={'graph-container'} className='FrequencyGraph_container'>
            <div className='FrequencyGraph_graph'>{renderBarGraph()}</div>
        </div>
    );
};

export default FrequencyGraph;
