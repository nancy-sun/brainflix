const SEC = 1000;
const MIN = SEC * 60;
const HOUR = MIN * 60;
const DAY = HOUR * 24;
const MONTH = DAY * 30;
const YEAR = DAY * 365;

const UNITS_MAP = new Map([
    [YEAR, "year"],
    [MONTH, "month"],
    [DAY, "day"],
    [HOUR, "hour"],
    [MIN, "min"],
    [SEC, "sec"]
])

export default function getTimeElapsed(commentTimestamp) {
    const now = new Date().getTime(); //milliseconds now
    let timeElapsed = now - commentTimestamp; //milliseconds elapsed
    for (let [unit, unitStr] of UNITS_MAP) {
        let dynamicTime = getDynamicUnit(timeElapsed, unit, unitStr);
        if (dynamicTime) {
            return dynamicTime;
        }
    }
    return "just now";
}

function getDynamicUnit(timeElapsed, unit, unitStr) {
    let unitDiff = timeElapsed - unit;
    let dynamicUnit = Math.round(unitDiff / unit);
    if (dynamicUnit > 0) {
        return `${dynamicUnit} ${unitStr}${dynamicUnit > 1 ? "s" : ""} ago`;
    }
}

//print date in mm/dd/yyyy
export function printDateString(timestamp) {
    let date = new Date(timestamp);

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if (day < 10) {
        day = "0" + day;
    }

    if (month < 10) {
        month = "0" + month;
    }

    return `${month}/${day}/${year}`;
}