import "./Comment.scss"

export default function Comment({ commentObj }) {
    const date = new Date(commentObj.timestamp).toLocaleDateString();
    return (
        <li className="comment__item">
            <div className="comment__avatar"></div>
            <div className="comment__context">
                <div className="comment__info">
                    <p className="comment__name">{commentObj.name}</p>
                    <p className="comment__time">{date}</p>
                </div>
                <p className="comment__text">{commentObj.comment}</p>
            </div>
        </li>

    )
}