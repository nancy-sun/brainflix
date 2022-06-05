import axios from "axios";
import "./CommentForm.scss";
import React from "react";

export default class CommentForm extends React.Component {

    render() {
        return (
            <div className="comment__post">
                <div className="comment__form-avatar"></div>
                <form className="comment__form" onSubmit={this.props.submitComment}>
                    <label htmlFor="comment" className="comment__label">join the conversation</label>
                    <div className="comment__submit-wrap">
                        <textarea name="comment" id="comment" placeholder="Add a new comment" className="comment__input"></textarea>
                        <button type="submit" className="comment__submit">comment</button>
                    </div>
                </form>
            </div>
        )
    }
}
