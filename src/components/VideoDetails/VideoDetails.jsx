import CommentSection from "../CommentSection/CommentSection";

function VideoDetails() {

    return (
        <div className="video__details">
            <div className="video__context">
                <div className="video__head">
                    <h1 className="video__title">Title</h1>
                    <div className="video__info">
                        <p className="video__author">By author</p>
                        <p className="video__date">date</p>
                        <div className="video__views">1235</div>
                        <div className="video__likes">12345</div>
                    </div>
                </div>
                <p className="video__about">about this video</p>
            </div>
            <CommentSection />
        </div>
    )
}

export default VideoDetails;


