export default function CommentForm() {
    return (
        <div className="comment__form">
            <form>
                <label htmlFor="comment" className="comment__label"></label>
                <div className="comment__avatar"></div>
                <input type="text" name="comment" id="comment" className="comment__input" />
                <button className="comment__submit">comment</button>
            </form>
        </div>
    )
}
