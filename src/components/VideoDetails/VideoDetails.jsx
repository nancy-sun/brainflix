import CommentSection from "../CommentSection/CommentSection";
import "./VideoDetails.scss";

export default function VideoDetails({ currentVideo: { title, channel, timestamp, views, likes, description, comments } }) {
    let date = new Date(timestamp).toLocaleDateString();

    return (
        <div className="video__details">
            <div className="video__context">
                <div className="video__about">
                    <h1 className="video__title">{title}</h1>
                    <div className="video__head">
                        <div className="video__info">
                            <p className="video__channel">By {channel}</p>
                            <p className="video__date">{date}</p>
                        </div>
                        <div className="video__data">
                            <p className="video__views">{views}</p>
                            <p className="video__likes">{likes}</p>
                        </div>
                    </div>
                </div>
                <p className="video__description">{description}</p>
            </div>
            <CommentSection comments={comments} />
        </div>
    )
}



