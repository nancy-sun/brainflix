import "./Comment.scss";

const SEC = 1000;
const MIN = SEC * 60;
const HOUR = MIN * 60;
const DAY = HOUR * 24;
const MONTH = DAY * 30;
const YEAR = MONTH * 12;

const UNITS_MAP = new Map([
    [YEAR, "year"],
    [MONTH, "month"],
    [DAY, "day"],
    [HOUR, "hour"],
    [MIN, "min"],
    [SEC, "sec"]
])

function getTimeElapsed(commentTimestamp) {
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
    if (unitDiff > 0) {
        let dynamicUnit = Math.floor(unitDiff / unit);
        return `${dynamicUnit} ${unitStr}${dynamicUnit > 1 ? "s" : ""} ago`;
    }
}

export default function Comment({ commentObj }) {
    const date = new Date(commentObj.timestamp);
    return (
        <li className="comment__item">
            <div className="comment__avatar"></div>
            <div className="comment__context">
                <div className="comment__info">
                    <p className="comment__name">{commentObj.name}</p>
                    <p className="comment__time">{getTimeElapsed(date)}</p>
                </div>
                <p className="comment__text">{commentObj.comment}</p>
            </div>
        </li>
    )
}


