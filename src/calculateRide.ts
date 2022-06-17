// @ts-nocheck
const OVERNIGHT_FARE = 3.90;
const SUNDAY_FARE = 2.9;
const OVERNIGHT_SUNDAY_FARE = 5;
const NORMAL_FARE = 2.10;
const OVERNIGHT_START = 22;
const OVERNIGHT_END = 6;
const MIN_FARE = 10;

function isOvernight(date) {
    return date.getHours() >= OVERNIGHT_START || date.getHours() <= OVERNIGHT_END;
}

function isSunday(date) {
    return date.getDay() === 0;
}

function isValidDistance (distance) {
    return distance != null && distance != undefined && typeof distance === "number" && distance > 0
}

function isValidDate (date) {
    return date != null && date != undefined && date instanceof Date && date.toString() !== "Invalid Date";
}

export function calculateRide(segments) {
    let fare = 0;
    for (const segment of segments) {
        
    }
    return (fare > MIN_FARE) ? fare : MIN_FARE;
}