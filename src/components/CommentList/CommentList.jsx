import Comment from "../Comment/Comment"

export default function CommentList({ comments }) {
    return (
        <ul className="comment__list">
            <li className="comment__item">
                <div className="comment__avatar"></div>
                <div className="comment__context">ds</div>
                <div className="comment__info">
                    <p className="comment__name">{comments[0].name}</p>
                    <p className="comment__time">231</p>
                </div>
                <p className="comments__text">312</p>
            </li>
            {/* {comments.map(commentObj => {
                <Comment name={commentObj.name} />
            })} */}
        </ul>
    )
}

