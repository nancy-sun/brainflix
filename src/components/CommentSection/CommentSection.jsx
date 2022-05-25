import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";

function CommentSection() {

    return (
        <div className="comment">
            <p className="comment__total">3 comments</p>
            <CommentForm />
            <CommentList />
        </div>
    )
}

export default CommentSection;