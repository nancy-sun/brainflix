import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";
import "./CommentSection.scss";
import React from "react";

export default class CommentSection extends React.Component {
    render() {
        let { comments, submitComment } = this.props;
        return (
            <div className="comment">
                <p className="comment__total">{comments.length} {comments.length > 1 ? "comments" : "comment"}</p>
                <CommentForm submitComment={submitComment} />
                <CommentList comments={comments} />
            </div>

        )
    }
}