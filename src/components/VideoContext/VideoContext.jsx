import CommentSection from "../CommentSection/CommentSection";
import "./VideoContext.scss";

export default function VideoContext({ currentVideo: { title, channel, timestamp, views, likes, description, comments } }) {

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
            <CommentSection comments={comments} />
        </div>
    )
}

function printDateString(timestamp) {
    let date = new Date(timestamp);

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if (day < 10) {
        day = "0" + day;
    }

    if (month < 10) {
        month = "0" + month;
    }

    return `${month}/${day}/${year}`;
}