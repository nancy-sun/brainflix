import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";

export default function CommentSection({ comments }) {
    return (
        <div className="comment">
            <p className="comment__total">{comments.length} {comments.length > 1 ? "comments" : "comment"}</p>
            <CommentForm />
            <CommentList comments={comments} />
        </div>
    )
}

