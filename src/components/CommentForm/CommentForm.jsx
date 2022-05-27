import "./CommentForm.scss";

export default function CommentForm() {
    return (
        <div className="comment__post">
            <div className="comment__form-avatar"></div>
            <form className="comment__form">
                <label htmlFor="comment" className="comment__label">join the conversation</label>
                <textarea name="comment" id="comment" className="comment__input"></textarea>
                <button className="comment__submit">comment</button>
            </form>
        </div>
    )
}
