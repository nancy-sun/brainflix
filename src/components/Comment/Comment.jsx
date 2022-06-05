import getTimeElapsed from "../../utils/DateUtils";
import "./Comment.scss";

export default function Comment({ name, comment, timestamp }) {
    const date = new Date(timestamp);
    return (
        <li className="comment__item">
            <div className="comment__avatar"></div>
            <div className="comment__context">
                <div className="comment__info">
                    <p className="comment__name">{name}</p>
                    <button className="comment__delete"></button>
                    <p className="comment__time">{getTimeElapsed(date)}</p>
                </div>
                <p className="comment__text">{comment}</p>
            </div>
        </li>
    )
}


