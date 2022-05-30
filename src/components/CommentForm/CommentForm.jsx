import "./CommentForm.scss";

export default function CommentForm() {
    return (
        <div className="comment__post">
            <div className="comment__form-avatar"></div>
            <form className="comment__form">
                <label htmlFor="comment" className="comment__label">join the conversation</label>
                <div className="comment__submit-wrap">
                    <textarea name="comment" id="comment" placeholder="Add a new comment" className="comment__input"></textarea>
                    <button className="comment__submit">comment</button>
                </div>
            </form>
        </div>
    )
}
