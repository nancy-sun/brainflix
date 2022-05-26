import CommentSection from "../CommentSection/CommentSection";

export default function VideoDetails({ currentVideo: { title, channel, timestamp, views, likes, description } }) {
    let uploadDate = new Date(timestamp);
    console.log(uploadDate);
    return (
        <div className="video__details">
            <div className="video__context">
                <div className="video__head">
                    <h1 className="video__title">{title}</h1>
                    <div className="video__info">
                        <p className="video__channel">{channel}</p>
                        <p className="video__date">{ }</p>
                        <div className="video__views">{views}</div>
                        <div className="video__likes">{likes}</div>
                    </div>
                </div>
                <p className="video__description">{description}</p>
            </div>
            <CommentSection />
        </div>
    )
}



