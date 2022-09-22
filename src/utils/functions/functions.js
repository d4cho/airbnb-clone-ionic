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
