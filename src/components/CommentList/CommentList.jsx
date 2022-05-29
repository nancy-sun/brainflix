import Comment from "../Comment/Comment";
import "./CommentList.scss";

export default function CommentList({ comments }) {
    return (
        <ul className="comment__list">
            {comments.map(commentObj => {
                return <Comment commentObj={commentObj} />
            })}
        </ul>
    )
}

