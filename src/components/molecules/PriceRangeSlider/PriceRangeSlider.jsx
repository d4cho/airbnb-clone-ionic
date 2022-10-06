import React, { useRef, useState, useEffect } from 'react';
import {
    getFrequencyOfNum,
    getHighestFrequency,
} from '../../../utils/functions/functions';
import './PriceRangeSlider.scss';

const PriceRangeSlider = (props) => {
    const {
        fixedThousandPlusPriceData,
        uniquePriceData,
        minPositionX,
        setMinPositionX,
        maxPositionX,
        setMaxPositionX,
        setMinPrice,
        setMaxPrice,
    } = props;

    const containerRef = useRef();

    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.offsetWidth);
            }
        }, 1000);
    }, []);

    const handleTouchMoveMin = (e) => {
        const leftBound = 40; // total left padding from edge of screen to div
        let newXPosition = e.touches[0].clientX;
        if (newXPosition < leftBound) {
            setMinPositionX(0);
            setMinPrice(10);
        } else {
            setMinPositionX(newXPosition - 42);
        }
    };

    const handleTouchMoveMax = (e) => {
        const rightBound = 40; // total right padding from edge of screen to div
        const maxWidth = window.innerWidth;
        let newXPosition = e.touches[0].clientX;
        if (newXPosition > maxWidth - rightBound) {
            setMaxPositionX(0);
            setMaxPrice(1000);
        } else {
            setMaxPositionX(maxWidth - newXPosition - 42);
        }
    };

    const renderBarGraph = () => {
        const highestFrequency = getHighestFrequency(
            fixedThousandPlusPriceData
        );

        return uniquePriceData.map((price, idx) => {
            const priceFrequency = getFrequencyOfNum(
                price,
                fixedThousandPlusPriceData
            );
            const barWidth = containerWidth / uniquePriceData.length;
            const barHeight = (priceFrequency / highestFrequency) * 100;

            // half of div width === 16px
            const isOpaque =
                barWidth * (idx + 1) - 16 < minPositionX ||
                barWidth * (idx + 1) - 16 > containerWidth - 16 - maxPositionX;

            return (
                <div
                    key={idx}
                    className='PriceRangeSlider_bar'
                    style={{
                        width: barWidth,
                        height: barHeight,
                        opacity: isOpaque ? 0.5 : 1,
                    }}
                />
            );
        });
    };

    return (
        <div
            id={'graph-container'}
            ref={containerRef}
            className='PriceRangeSlider_container'
        >
            <div className='PriceRangeSlider_graph'>{renderBarGraph()}</div>
            <div className='PriceRangeSlider_track'>
                <div
                    className='PriceRangeSlider_draggableMin'
                    onTouchMove={handleTouchMoveMin}
                    style={{ left: minPositionX }}
                />
                <div
                    className='PriceRangeSlider_draggableMax'
                    onTouchMove={handleTouchMoveMax}
                    style={{ right: maxPositionX }}
                />
            </div>
        </div>
    );
};

export default PriceRangeSlider;
