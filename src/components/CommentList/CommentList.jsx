function CommentList() {
    return (
        <ul className="comment__list">
            <li className="comment__item">
                <div className="comment__avatar"></div>
                <div className="comment__context"></div>
                <div className="comment__info">
                    <p className="comment__name"></p>
                    <p className="comment__time"></p>
                </div>
                <p className="comments__text"></p>
            </li>
        </ul>
    )
}

export default CommentList;