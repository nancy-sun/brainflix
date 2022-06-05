import Comment from "../Comment/Comment";
import "./CommentList.scss";

export default function CommentList({ comments }) {
    let sortedComments = comments.sort((a, b) => {
        return b.timestamp - a.timestamp;
    });
    console.log(sortedComments)
    return (
        <ul className="comment__list">
            {sortedComments && sortedComments.map((commentObj) => {
                return <Comment key={commentObj.id} {...commentObj} />
            })}
        </ul>
    )
}

