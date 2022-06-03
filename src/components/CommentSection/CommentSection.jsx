import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";
import "./CommentSection.scss";

export default function CommentSection({ comments }) {
    // console.log(comments.length);
    return (
        <div className="comment">
            <p className="comment__total">{comments.length} {comments.length > 1 ? "comments" : "comment"}</p>
            <CommentForm />
            <CommentList comments={comments} />
        </div>
    )
}

