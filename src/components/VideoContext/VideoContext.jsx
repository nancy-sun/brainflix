import CommentSection from "../CommentSection/CommentSection";
import "./VideoContext.scss";
import { printDateString } from "../../utils/DateUtils";
import React from "react";

export default class VideoContext extends React.Component {
    render() {
        let { title, channel, timestamp, views, likes, description, comments, submitComment } = this.props;

        return (
            <div className="video__context">
                <div className="video__text">
                    <div className="video__about">
                        <h1 className="video__title">{title}</h1>
                        <div className="video__head">
                            <div className="video__info">
                                <p className="video__channel">By {channel}</p>
                                <p className="video__date">{printDateString(timestamp)}</p>
                            </div>
                            <div className="video__data">
                                <p className="video__views">{views}</p>
                                <p className="video__likes">{likes}</p>
                            </div>
                        </div>
                    </div>
                    <p className="video__description">{description}</p>
                </div>
                {comments &&
                    <CommentSection comments={comments} submitComment={submitComment} />
                }
            </div>
        )
    }
}
