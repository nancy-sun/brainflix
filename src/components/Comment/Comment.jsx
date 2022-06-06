
import getTimeElapsed from "../../utils/DateUtils";
import "./Comment.scss";
import React from "react";


export default class Comment extends React.Component {

    render() {
        let { id, name, comment, timestamp, deleteComment } = this.props
        const date = new Date(timestamp);
        return (
            <li className="comment__item">
                <div className="comment__avatar"></div>
                <div className="comment__context">
                    <div className="comment__info">
                        <p className="comment__name">{name}</p>
                        <p className="comment__time">{getTimeElapsed(date)}</p>
                        <button className="comment__delete" onClick={() => deleteComment(id)}></button>
                    </div>
                    <p className="comment__text">{comment}</p>
                </div>
            </li>
        )
    }

}
