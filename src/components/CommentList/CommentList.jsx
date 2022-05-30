import Comment from "../Comment/Comment";
import "./CommentList.scss";
import { v4 as uuidv4 } from 'uuid';

export default function CommentList({ comments }) {
    return (
        <ul className="comment__list">
            {comments.map((commentObj) => {
                return <Comment key={uuidv4()} commentObj={commentObj} />
            })}
        </ul>
    )
}

