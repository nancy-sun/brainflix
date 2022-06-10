import Comment from "../Comment/Comment";
import "./CommentList.scss";
import React from "react";


export default class CommentList extends React.Component {

    render() {
        let { comments, deleteComment } = this.props
        let sortedComments = comments.sort((a, b) => {
            return b.timestamp - a.timestamp;
        });
        return (
            <ul className="comment__list">
                {sortedComments && sortedComments.map((commentObj) => {
                    console.log(commentObj.id);
                    return <Comment key={commentObj.id} {...commentObj} deleteComment={deleteComment} />
                })}
            </ul>
        )
    }
}

