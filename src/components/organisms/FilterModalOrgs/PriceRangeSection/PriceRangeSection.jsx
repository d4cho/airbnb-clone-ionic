import React, { useState } from 'react';
import PriceInput from '../../../atoms/PriceInput/PriceInput';
import { priceRangeData } from '../../../../assets/data/filter-data';
import { getAverage } from '../../../../utils/functions/functions';
import './PriceRangeSection.scss';
import MultiRangeSlider from '../../../atoms/MultiRangeSlider/MultiRangeSlider';
import FrequencyGraph from '../../../atoms/FrequencyGraph/FrequencyGraph';

const PriceRangeSection = () => {
    const [minPrice, setMinPrice] = useState(10);
    const [maxPrice, setMaxPrice] = useState(1000);

    const updateMinPriceSlider = (percentage) => {
        const newMin = (percentage / 100) * 1000;
        setMinPrice(newMin);
    };

    const updateMaxPriceSlider = (percentage) => {
        const newMax = (percentage / 100) * 1000;
        setMaxPrice(newMax);
    };

    return (
        <div className='PriceRangeSection_container'>
            <div className='PriceRangeSection_heading'>Price range</div>
            <div className='PriceRangeSection_average'>
                The average nightly price is $
                {Math.floor(getAverage(priceRangeData))}
            </div>
            <div className='PriceRangeSection_slider'>
                <FrequencyGraph
                    arrOfNums={priceRangeData}
                    minPercentage={(minPrice / 1000) * 100}
                    maxPercentage={(maxPrice / 1000) * 100}
                />
                <MultiRangeSlider
                    initialMin={(minPrice / 1000) * 100}
                    initialMax={(maxPrice / 1000) * 100}
                    getMinValue={updateMinPriceSlider}
                    getMaxValue={updateMaxPriceSlider}
                    minDisabled={false}
                    maxDisabled={false}
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
