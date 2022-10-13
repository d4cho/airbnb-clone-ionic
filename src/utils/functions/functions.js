export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const getDurationDates = (currentDates, latestSelectedDate) => {
    let durationDates = [...currentDates];

    if (durationDates.length >= 2) {
        durationDates = [latestSelectedDate];
    } else {
        durationDates.push(latestSelectedDate);
    }

    return durationDates;
};

export const getNightsBetweenDates = (dates) => {
    const date1 = new Date(dates[0]);
    const date2 = new Date(dates[1]);
    return Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
};

export const getHighestFrequency = (arrOfNums) => {
    let currHighest = 0;

    for (let i = 0; i < arrOfNums.length; i++) {
        let newHighest = arrOfNums.filter((num) => num === arrOfNums[i]).length;
        if (newHighest > currHighest) {
            currHighest = newHighest;
        }
    }

    return currHighest;
};

export const getFrequencyOfNum = (num, arrOfNums) => {
    return arrOfNums.filter((number) => number === num).length;
};

export const getAverage = (arrOfNums) => {
    return arrOfNums.reduce((a, b) => a + b, 0) / arrOfNums.length;
};

export const fixDataByIncrement = (dataArr, start, end, inc) => {
    let result = [];
    let current = start;

    while (current <= end) {
        let newArr = dataArr.filter(
            (num) => num >= current && num < current + inc
        );
        result.push(newArr);

        current = current + inc;
    }

    return result;
};

export const isValid = (regExp, text) => {
    let regex = new RegExp(regExp);
    return regex.test(text);
};
