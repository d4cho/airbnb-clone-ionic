import React, { useState, useEffect } from 'react';
import PriceInput from '../../../atoms/PriceInput/PriceInput';
import PriceRangeSlider from '../../../molecules/PriceRangeSlider/PriceRangeSlider';
import { priceRangeData } from '../../../../assets/data/filter-data';
import { getAverage } from '../../../../utils/functions/functions';
import './PriceRangeSection.scss';

const PriceRangeSection = () => {
    // const handleDrag = (e) => {
    //     console.log(e.clientX);
    // };

    const [minPositionX, setMinPositionX] = useState(0);
    const [maxPositionX, setMaxPositionX] = useState(0);
    const [minPrice, setMinPrice] = useState(10);
    const [maxPrice, setMaxPrice] = useState(1000);

    let fixedThousandPlusPriceData = [];
    priceRangeData.forEach((price) => {
        if (price >= 1000) {
            fixedThousandPlusPriceData.push(1000);
        } else {
            fixedThousandPlusPriceData.push(price);
        }
    });

    const uniquePriceData = Array.from(new Set(fixedThousandPlusPriceData));

    return (
        <div className='PriceRangeSection_container'>
            <div className='PriceRangeSection_heading'>Price range</div>
            <div className='PriceRangeSection_average'>
                The average nightly price is $
                {Math.floor(getAverage(priceRangeData))}
            </div>
            <div className='PriceRangeSection_slider'>
                <PriceRangeSlider
                    fixedThousandPlusPriceData={fixedThousandPlusPriceData}
                    uniquePriceData={uniquePriceData}
                    minPositionX={minPositionX}
                    setMinPositionX={setMinPositionX}
                    maxPositionX={maxPositionX}
                    setMaxPositionX={setMaxPositionX}
                    setMinPrice={setMinPrice}
                    setMaxPrice={setMaxPrice}
                />
            </div>
            <div className='PriceRangeSection_textbox'>
                <div>
                    <PriceInput
                        label={'min price'}
                        startAdornment={'$'}
                        value={minPrice.toString()}
                        setValue={setMinPrice}
                    />
                </div>
                <div className='PriceRangeSection_hyphen'>-</div>
                <div>
                    <PriceInput
                        label={'max price'}
                        startAdornment={'$'}
                        value={maxPrice.toString()}
                        setValue={setMaxPrice}
                    />
                </div>
            </div>
        </div>
    );
};

export default PriceRangeSection;
